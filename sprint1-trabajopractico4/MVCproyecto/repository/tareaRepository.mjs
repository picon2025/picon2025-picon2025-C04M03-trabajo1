import fs from 'fs'; // Módulo para manejar el sistema de archivos
import path from 'path'; // Módulo para manejar rutas
import { fileURLToPath } from 'url'; // Para convertir import.meta.url a __filename

// Importamos la interfaz de persistencia y el modelo Tarea
import TareasDataSource from './tareasDataSource.mjs';
import Tarea from '../models/tarea.mjs';

// Obtener la ruta del archivo actual y su directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../tareas.txt');

// Clase concreta que extiende la interfaz de persistencia
export default class TareaRepository extends TareasDataSource {
  constructor() {
    super(); // Llamamos al constructor de la clase base
  }

  // Método para obtener todas las tareas desde el archivo
  obtenerTodas() {
    try {
      const data = fs.readFileSync(filePath, 'utf-8'); // Leemos el archivo como texto
      const tareas = JSON.parse(data); // Convertimos el JSON en objetos
      // Convertimos cada objeto a una instancia de la clase Tarea
      return tareas.map(tareaData => new Tarea(
        tareaData.id,
        tareaData.titulo,
        tareaData.descripcion,
        tareaData.completado
      ));
    } catch (error) {
      console.error('Error al leer el archivo de tareas:', error);
      return []; // Si ocurre un error, devolvemos un array vacío
    }
  }

  // Método para guardar una lista de tareas en el archivo
  guardar(tareas) {
    try {
      const data = JSON.stringify(tareas, null, 2); // Convertimos las tareas a JSON con formato
      fs.writeFileSync(filePath, data, 'utf-8'); // Escribimos en el archivo
    } catch (error) {
      console.error('Error al guardar las tareas:', error);
    }
  }

  // Método para eliminar una tarea por ID
  eliminar(id) {
    try {
      const tareas = this.obtenerTodas(); // Obtenemos todas las tareas
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); // Filtramos la que se va a eliminar
      this.guardar(tareasActualizadas); // Guardamos la lista actualizada
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  }
}
