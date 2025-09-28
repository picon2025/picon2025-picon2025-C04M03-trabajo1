import fs from 'fs';

// Clase para representar un Superheroe
class Superheroe {
  constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad,
              planetaOrigen, debilidad, poder, habilidadEspecial, aliado,
              enemigo) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;
  }
}

// Funcion para leer y ordenar superheroes
export function leerSuperheroes(ruta) {
  const datos = fs.readFileSync(ruta, 'utf8');
  const superheroesArray = JSON.parse(datos);

  const superheroes = superheroesArray.map(hero =>
    new Superheroe(
      hero.id,
      hero.nombreSuperheroe,
      hero.nombreReal,
      hero.nombreSociedad,
      hero.edad,
      hero.planetaOrigen,
      hero.debilidad,
      hero.poder,
      hero.habilidadEspecial,
      hero.aliado,
      hero.enemigo
    )
  );

  superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

  return superheroes;
}

// Funcion para agregar un superheroe, evitando duplicados y asignando id automaticamente
export function agregarSuperheroes(archOriginal, nuevoHeroe) {
  const datosActuales = fs.readFileSync(archOriginal, 'utf8');
  const listaSuperheroes = JSON.parse(datosActuales);

  // Evitar duplicados por nombreSuperheroe (ignorar mayusculas/minusculas)
  const existe = listaSuperheroes.some(
    h => h.nombreSuperheroe.toLowerCase() === nuevoHeroe.nombreSuperheroe.toLowerCase()
  );

  if (existe) {
    console.log(` El superheroe "${nuevoHeroe.nombreSuperheroe}" ya existe. No se agrego.`);
    return;
  }

  // Asigno identificaion ID 

let maxId = 0;

for (let i = 0; i < listaSuperheroes.length; i++) {
  if (listaSuperheroes[i].id > maxId) {
    maxId = listaSuperheroes[i].id;
  }
}

nuevoHeroe.id = maxId + 1;







  // Agregar nuevo heroe
  listaSuperheroes.push(nuevoHeroe);

  // Guardar lista actualizada
  fs.writeFileSync(archOriginal, JSON.stringify(listaSuperheroes, null, 2), 'utf8');

  console.log(' Superheroe agregado correctamente:', nuevoHeroe.nombreSuperheroe);
}




