const db = require('../database/db');

const getSuscripciones_models = (req, res) => {
    try {
        const query = 'SELECT * FROM Suscripciones';
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay suscripciones registradas'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const createSuscripcion_models = (req, res) => {
    try {
        const { idCliente, idComerciante} = req.body;
        console.log(req.body);
        const query = `INSERT INTO Suscripciones (idCliente, idComerciante) VALUES ('${idCliente}', '${idComerciante}') `;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Suscripción creada correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const getSuscripcion_models = (req, res) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM Suscripciones WHERE idSuscripciones = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'La suscripción no existe'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}
const deleteSuscripcion_models = (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM Suscripciones WHERE idSuscripciones = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Suscripción eliminada correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

module.exports = {
    getSuscripciones_models,
    createSuscripcion_models,
    getSuscripcion_models,
    deleteSuscripcion_models
}
