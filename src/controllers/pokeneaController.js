const pokeneas = require('../data/pokeneas');
const os = require("os")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Ruta JSON: devuelve id, nombre, altura, habilidad + id del contenedor
exports.randomJson = (req, res) => {
  const idx = getRandomInt(pokeneas.length);
  const p = pokeneas[idx];

  const containerId = os.hostname();

  const payload = {
    id: p.id,
    nombre: p.nombre,
    altura: p.altura,
    habilidad: p.habilidad,
    containerId: containerId
  };

  res.json(payload);
};

// Ruta HTML: muestra imagen y frase filosófica de forma aleatoria + id del contenedor
exports.randomView = (req, res) => {
  const idx = getRandomInt(pokeneas.length);
  const p = pokeneas[idx];
  const containerId = os.hostname();

  // Renderiza la vista EJS
  res.render('pokenea', {
    pokenea: p,
    containerId: containerId
  });
};
