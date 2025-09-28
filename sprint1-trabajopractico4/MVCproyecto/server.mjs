import express from 'express'; // Importamos el framework Express

// Importamos los controladores
import {
  listarTareasController,
  listarTareasCompletadasController,
  crearTareaController,
  completarTareaController,
  eliminarTareaController
} from './controllers/tareaController.mjs';

const app = express(); // Inicializamos una aplicación de Express
const PORT = 3090; // Puerto en el que escuchará el servidor

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Definición de rutas

// Ruta para obtener todas las tareas
app.get('/tareas', listarTareasController);

// Ruta para obtener solo las tareas completadas
app.get('/tareas/completadas', listarTareasCompletadasController);

// Ruta para crear una nueva tarea
app.post('/tareas', crearTareaController);

// Ruta para marcar una tarea como completada
app.put('/tareas/:id/completar', completarTareaController);

// Ruta para eliminar una tarea
app.delete('/tareas/:id', eliminarTareaController);

// agrega una ruta raíz que responda algo
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de tareas. Usa /tareas para gestionar las tareas.');
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
