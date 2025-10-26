const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokeneaController');

// Ruta JSON (ej: GET /api/pokenea)
router.get('/api/pokenea', controller.randomJson);

// Ruta HTML (ej: GET /pokenea)
router.get('/pokenea', controller.randomView);

// Root: redirige a /pokenea
router.get('/', (req, res) => {
  res.redirect('/pokenea');
});

module.exports = router;
