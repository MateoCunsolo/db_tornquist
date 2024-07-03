const models = require('../../models/suscripciones.model');

const getSuscripciones = (req, res) => {
    models.getSuscripciones_models(req, res);
}

const getSuscripcionesComerciante = (req, res) => {
    models.getSuscripcionesDeComerciante_models(req, res);
}

module.exports = {
    getSuscripciones,
    getSuscripcionesComerciante,
}
