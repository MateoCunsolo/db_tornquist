//conexion a la base de datos y consultas crud a la base de datos

const db = require('../../database/db');

const getClientes = (req, res) => {
    try {
        const query = 'SELECT * FROM Clientes';
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay clientes registrados'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const createCliente = (req, res) => {
    try {
        const { mail, ciudad } = req.body;
        console.log(req.body);
        const query = `INSERT INTO Clientes (mail, ciudad) VALUES ('${mail}', '${ciudad}')`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Cliente creado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const getCliente = (req, res) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM Clientes WHERE idCliente = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'El cliente no existe'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const deleteCliente = (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM Clientes WHERE idCliente = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Cliente eliminado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

module.exports = {
  getClientes,
  createCliente,
  getCliente,
  deleteCliente
}
