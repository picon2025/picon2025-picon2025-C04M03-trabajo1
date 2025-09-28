// controllers/superheroesController.mjs

import {
  obtenerSuperheroePorId,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30
} from '../services/superheroesService.mjs';

import {
  renderizarSuperheroe,
  renderizarListaSuperheroes
} from '../views/responseView.mjs';

// Controlador para obtener un superhéroe por su ID
export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));

  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

// Controlador para buscar superhéroes por atributo
export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

// Controlador para obtener superhéroes mayores de 30, de la Tierra, con al menos 2 poderes
export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}
