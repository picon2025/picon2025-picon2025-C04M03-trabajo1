// Importamos express usando sintaxis ES6
import express from 'express';

// Creamos la aplicación
const app = express();

// Definimos el puerto del servidor
const PORT = 3000;

/*
  Ruta GET que captura el parámetro dinámico 'id'
  Ejemplo de uso: http://localhost:3000/user/42
*/
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Obtenemos el parámetro 'id' de la URL
  console.log(`ID recibido: ${userId}`); // Mostramos en consola
  res.send(`ID del usuario: ${userId}`); // Respondemos al navegador
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
