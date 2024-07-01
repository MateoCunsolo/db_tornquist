const { Router } = require('express');
const router = Router();

const {
    
    getComerciantes,
    createComerciante,
    getComerciante,
    deleteComerciante,
    updateComerciante

} = require('../controllers/comerciantes.controller');

const {
    
  getClientes,
  createCliente,
  getCliente,
  deleteCliente

} = require('../controllers/clientes.controller');

const {
    
  getSuscripciones,
  createSuscripcion,
  getSuscripcion,
  deleteSuscripcion

} = require('../controllers/suscripciones.controller');

const {
    
  getCategorias,
  createCategoria,
  getCategoria,
  deleteCategoria,
  updateCategoria

} = require('../controllers/categorias.controller');

const {
    
  getPosteos,
  createPosteo,
  getPosteo,
  deletePosteo,
  updatePosteo

} = require('../controllers/posteos.controller');

// Routes

//ruta de inicio
router.get('/', (req, res) => {res.json({message: 'Bienvenido a la API de Turismo'});});

// [ C O M E R C I A N T E S ]
router.get('/comerciantes', getComerciantes); // Get all comerciantes
router.get('/comerciantes/:id', getComerciante); // Get comerciante by id
router.delete('/comerciantes/:id', deleteComerciante); // Delete comerciante by id
router.put('/comerciantes/:id', updateComerciante); // Update comerciante by id

// [ C L I E N T E S ]
router.get('/clientes', getClientes); // Get all clientes
router.post('/clientes', createCliente); // Create cliente
router.get('/clientes/:id', getCliente); // Get cliente by id
router.delete('/clientes/:id', deleteCliente); // Delete cliente by id

// [ S U S C R I P C I O N E S ]
router.get('/suscripciones', getSuscripciones); // Get all suscripciones
router.post('/suscripciones', createSuscripcion); // Create suscripcion
router.get('/suscripciones/:id', getSuscripcion); // Get suscripcion by id
router.delete('/suscripciones/:id', deleteSuscripcion); // Delete suscripcion by id

// [ C A T E G O R I A S ]
router.get('/categorias', getCategorias); // Get all categorias
router.post('/categorias', createCategoria); // Create categoria
router.get('/categorias/:id', getCategoria); // Get categoria by id
router.delete('/categorias/:id', deleteCategoria); // Delete categoria by id
router.put('/categorias/:id', updateCategoria); // Update categoria by id

// [ P O S T E O S ]
router.get('/posteos', getPosteos); // Get all posteos
router.post('/posteos', createPosteo); // Create posteo
router.get('/posteos/:id', getPosteo); // Get posteo by id
router.delete('/posteos/:id', deletePosteo); // Delete posteo by id
router.put('/posteos/:id', updatePosteo); // Update posteo by id


//ruta geenrica si cualquier ruta es ingresada 
router.get('*', (req, res) => {res.json({message: 'Ruta no encontrada'});});

module.exports = router;


