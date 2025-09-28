import express from 'express'; // Importa el framework Express

const app = express(); // Crea una instancia de la aplicación Express
const PORT = 3000; // Define el puerto en el que correrá el servidor

// Define una ruta GET que recibe un parámetro de consulta "edad"
// Ejemplo de solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
  const edad = req.query.edad; // Obtiene el valor del parámetro 'edad' desde la URL
  console.log(`Edad recibida: ${edad}`); // Muestra en consola la edad recibida
  res.send(`Edad del perfil: ${edad}`); // Envía una respuesta al cliente con la edad recibida
});

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // Muestra mensaje en consola cuando el servidor está listo
});
