const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de Turismo',
});
});

module.exports = router;
