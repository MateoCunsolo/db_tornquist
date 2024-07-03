const models = require('../../models/comerciantes.model');

const getComerciantes = (req, res) => {
    models.getComerciantes_models(req, res);
}

const getComerciante = (req, res) => {
   models.getComerciante_models(req, res);
}

const deleteComerciante = (req, res) => {
    models.deleteComerciante_models(req, res);
}

const updateComerciante = (req, res) => {
    models.updateComerciante_models(req, res);
}

module.exports = {
    getComerciantes,
    getComerciante,
    deleteComerciante,
    updateComerciante
}
