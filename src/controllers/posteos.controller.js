const models = require('../../models/posteos.model');

const getPosteos = (req, res) => {
    models.getPosteos_models(req, res);
};

const createPosteo = (req, res) => {
    models.createPosteo_models(req, res);
}

const getPosteo = (req, res) => {
    models.getPosteo_models(req, res);
};

const deletePosteo = (req, res) => {
    models.deletePosteo_models(req, res);
};

const updatePosteo = (req, res) => {
    models.updatePosteo_models(req, res);
};

const getPosteosDeComerciante = (req, res) => {
    models.getPosteosPorComerciante_models(req, res);
}

const getPosteosPorCategoria = (req, res) => {
    models.getPosteosPorCategoria_models (req, res);
}

module.exports = {
    getPosteos,
    createPosteo,
    getPosteo,
    deletePosteo,
    updatePosteo,
    getPosteosDeComerciante,
    getPosteosPorCategoria
}