const { Router } = require('express');
const router = Router();

const {
    
    getComerciantes,
    createComerciantes


} = require('../controllers/comerciantes.controller');


// Routes

router.get('/comerciantes', getComerciantes); // Get all comerciantes
router.post('/comerciantes', createComerciantes); // Create a comerciante


module.exports = router;


