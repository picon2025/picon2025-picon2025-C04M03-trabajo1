import fs from 'fs';
import { agregarSuperheroes, leerSuperheroes } from './utils.mjs';

// Leer el nuevo superheroe o lista de superheroes desde el archivo externo
const nuevoHeroeData = fs.readFileSync('./agregarSuperheroes.txt', 'utf8');
const nuevoHeroe = JSON.parse(nuevoHeroeData);

// Verificamos si el archivo contiene un solo heroe o un array
if (Array.isArray(nuevoHeroe)) {
  // Si es un array, agregamos cada uno por separado
  nuevoHeroe.forEach(h => agregarSuperheroes('./superheroes.txt', h));
} else {
  //  Si es solo uno, lo agregamos directamente
  agregarSuperheroes('./superheroes.txt', nuevoHeroe);
}

// Leer y mostrar la lista de superheroes actualizada
const listaActualizada = leerSuperheroes('./superheroes.txt');
console.log(' Superhéroes actualizados:');
console.log(listaActualizada);
