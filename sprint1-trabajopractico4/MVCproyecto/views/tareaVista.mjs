// Función para renderizar una lista de tareas en formato JSON legible
export function renderizarListaTareas(tareas) {
  return JSON.stringify(tareas, null, 2); // Convierte el array de tareas en un string JSON con formato (indentación de 2 espacios)
}

// Función para renderizar un mensaje en formato JSON legible
export function renderizarMensajes(mensaje) {
  return JSON.stringify(mensaje, null, 2); // Convierte el mensaje a string JSON con formato
}

// Función para renderizar una sola tarea en formato JSON legible
export function renderizarTarea(tarea) {
  return JSON.stringify(tarea, null, 2); // Convierte una tarea individual en string JSON con formato
}

