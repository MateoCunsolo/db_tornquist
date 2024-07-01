const { Router } = require('express');
const router = Router();

const {} = require('../controllers/auth.controller');

//ruta geenrica si cualquier ruta es ingresada 
router.get('*', (req, res) => {res.json({message: 'Ruta no encontrada'});});

module.exports = router;


