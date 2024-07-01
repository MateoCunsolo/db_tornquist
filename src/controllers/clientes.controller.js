const models = require('../../models/clientes.model');

const getClientes = (req, res) => {
   models.getClientes_models(req, res);
}

const createCliente = (req, res) => {
   models.createCliente_models(req, res);
}

const getCliente = (req, res) => {
  models.getCliente_models(req, res);
}

const deleteCliente = (req, res) => {
    models.deleteCliente_models(req, res);
}

module.exports = {
  getClientes,
  createCliente,
  getCliente,
  deleteCliente
}
