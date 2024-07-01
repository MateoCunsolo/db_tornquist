const { Router } = require('express');
const router = Router();
const authMiddleware = require('../../middlewares/auth.middleware');
const auth = require('../controllers/auth.controller');

router.post("/register", auth.register);

router.get("/protected", authMiddleware, (req, res) => {
    res.status(200).json({message: 'Usuario autenticado: ' + req.id + ' '});
});

router.post("/login", auth.login);




// router.get('*', (req, res) => {res.json({message: 'Ruta no encontrada'});});

module.exports = router;


