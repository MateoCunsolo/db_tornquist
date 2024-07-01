const models = require('../../models/categorias.model');

const getCategorias = (req, res) => {
    models.getCategorias_models(req, res);
}

const createCategoria = (req, res) => {
    models.createCategoria_models(req, res);
}

const getCategoria = (req, res) => {
    models.getCategoria_models(req, res);
}

const deleteCategoria = (req, res) => {
    models.deleteCategoria_models(req, res);
}

const updateCategoria = (req, res) => {
    models.updateCategoria_models(req, res);
}

module.exports = {
    getCategorias,
    createCategoria,
    getCategoria,
    deleteCategoria,
    updateCategoria
}
