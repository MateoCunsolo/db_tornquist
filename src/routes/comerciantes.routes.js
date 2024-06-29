const { Router } = require('express');
const router = Router();

const {
    
    getComerciantes

} = require('../controllers/comerciantes.controller');


// Routes

router.get('/comerciantes', getComerciantes); // Get all comerciantes


module.exports = router;


