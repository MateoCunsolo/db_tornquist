const models = require('../../models/suscripciones.model');

const getSuscripciones = (req, res) => {
    models.getSuscripciones_models(req, res);
}

const createSuscripcion = (req, res) => {
   models.createSuscripcion_models(req, res);
}

const getSuscripcion = (req, res) => {
    models.getSuscripcion_models(req, res);
}
const deleteSuscripcion = (req, res) => {
    models.deleteSuscripcion_models(req, res);
}

module.exports = {
    getSuscripciones,
    createSuscripcion,
    getSuscripcion,
    deleteSuscripcion
}
