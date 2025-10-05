// Importar mongoose para manejar la conexion y esquemas de MongoDB
const mongoose = require('mongoose');

// Conexion a MongoDB Atlas
mongoose.connect("mongodb+srv://Grupo-15:grupo15@cursadanodejs.ls9ii.mongodb.net/Node-js")
  .then(() => console.log(' la Conexión  fue exitosa a la colección de Grupo 15 en MongoDB'))
  .catch(error => console.error(' Error al conectar a MongoDB:', error));

// Definición del esquema de Superhéroes
// Esto establece la estructura que tendran los documentos en la coleccion
const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true }, // Nombre del superheroe (obligatorio)
  nombreReal: { type: String, required: true },       // Nombre real del heroe (obligatorio)
  edad: { type: Number, min: 0 },                     // Edad minima 0
  planetaOrigen: { type: String, default: 'Desconocido' }, // Valor por defecto si no se especifica
  debilidad: String,                                  // Debilidad del héroe
  poderes: [String],                                  // Array de poderes
  aliados: [String],                                  // Array de aliados
  enemigos: [String],                                 // Array de enemigos
  createdAt: { type: Date, default: Date.now },       // Fecha de creación automatica
  creador: String                                     // Nombre del creador del registro
}, { collection: 'Grupo-15' });                       // Nombre de la colección en MongoDB

// Crear el modelo a partir del esquema
const SuperHero = mongoose.model('SuperHero', superheroSchema);

// ----------------- Métodos CRUD -----------------

// Método 1: Insertar un superheroe
async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperHeroe: 'Spiderman',
    nombreReal: 'Peter Parker',
    edad: 25,
    planetaOrigen: 'Tierra',
    debilidad: 'Radioactiva',
    poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
    aliados: ['Ironman'],
    enemigos: ['Duende Verde'],
    creador: 'Martin'
  });

  await hero.save(); // Guarda el documento en MongoDB
  console.log(' Superhéroe insertado:', hero);
  mongoose.connection.close(); // Cierra la conexion después de ejecutar
}

// Método 2: Actualizar un superheroe
async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe },     // Filtra por el nombre del heroe
    { $set: { edad: 26 } }    // Cambia la edad a 26
  );
  console.log(' Resultado de la actualización:', result);
  mongoose.connection.close();
}

// Método 3: Eliminar un superheroe
async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({ nombreSuperHeroe }); // Elimina por nombre
  console.log(' Superhéroe eliminado:', result);
  mongoose.connection.close();
}

// Método 4: Buscar superhéroes por planeta de origen
async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' }); // Busca todos de la Tierra
  console.log(' Superhéroes encontrados:', heroes);
  mongoose.connection.close();
}

// ----------------- Menu por argumentos de consola -----------------
// Se usa process.argv[2] para capturar la acción que se pasa al ejecutar node

const action = process.argv[2];

switch (action) {
  case 'insert':  
    insertSuperHero();   // node app.js insert   # Inserta Spiderman
    break;
  case 'update':   //node app.js update   # Actualiza la edad de Spiderman
    updateSuperHero('Spiderman'); // Podés cambiar el nombre si querés actualizar otro
    break;
  case 'delete':  //node app.js delete   # Elimina a Spiderman
    deleteSuperHero('Spiderman'); // Podés cambiar el nombre si querés eliminar otro
    break;
  case 'find':
    findSuperHeroes();   //node app.js find     # Muestra todos los heroes de la Tierra
    break;
  default:
    console.log(" atencion para  alguna accion debe usar node app.js + [insert|update|delete|find]");
    mongoose.connection.close();
    break;


 }
