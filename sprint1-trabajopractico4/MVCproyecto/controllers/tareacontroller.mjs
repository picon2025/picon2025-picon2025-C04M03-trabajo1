// Importamos las funciones del servicio de tareas
import {
  listarTareas,
  listarTareasCompletadas,
  crearTarea,
  completarTarea,
  eliminarTarea
} from '../services/tareaService.mjs';

// Importamos las funciones de renderizado de vistas
import {
  renderizarListaTareas,
  renderizarMensajes
} from '../views/tareaVista.mjs';

// Controlador para listar todas las tareas
export function listarTareasController(req, res) {
  const tareas = listarTareas();
  res.send(renderizarListaTareas(tareas));
}

// Controlador para listar solo las tareas completadas
export function listarTareasCompletadasController(req, res) {
  const tareasCompletadas = listarTareasCompletadas();
  res.send(renderizarListaTareas(tareasCompletadas));
}

// Controlador para crear una nueva tarea
export function crearTareaController(req, res) {
  const { id, titulo, descripcion, completado } = req.body; // Extraemos los datos del cuerpo de la solicitud
  crearTarea(id, titulo, descripcion, completado);
  res.send(renderizarMensajes('Tarea creada con éxito'));
}

// Controlador para marcar una tarea como completada
export function completarTareaController(req, res) {
  const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
  completarTarea(parseInt(id)); // Aseguramos que sea un número
  res.send(renderizarMensajes('Tarea marcada como completada'));
}

// Controlador para eliminar una tarea
export function eliminarTareaController(req, res) {
  const { id } = req.params;
  eliminarTarea(parseInt(id));
  res.send(renderizarMensajes('Tarea eliminada con éxito'));
}
