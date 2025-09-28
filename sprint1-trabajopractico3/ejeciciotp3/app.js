import express from 'express';

const app = express();
const PORT = 3000;

// Ruta con parámetro 'id'
app.get('/superheroe/:id', (req, res) => {
  const id = req.params.id; // Obtener el parámetro desde la URL
  console.log(`ID recibido: ${id}`); // Mostrar en consola
  res.send(`Superhéroe con ID: ${id}`); // Enviar respuesta al cliente
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
