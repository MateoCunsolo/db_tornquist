const executeQuery = require('../utils/executeQuery');
const {getComercianteNombre_models } = require('./comerciantes.model');

const getSuscripciones_models = (req, res) => {
    const query = 'SELECT * FROM Suscripciones';
    executeQuery(query).then((rows) => {
        if (rows.length === 0) {
            res.json({ message: 'No hay suscripciones registradas' });
        } else {
            res.json(rows);
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    })
}

const getSuscripcionesDeComerciante_models = async (req, res) => {
    const {nombreComerciante} = req.body;
    const idUsuarioCom = await getComercianteNombre_models(nombreComerciante);

    if (!idUsuarioCom) {
        return res.status(400).json({ error: 'El comerciante no existe' })
    }

    const query = `SELECT * FROM Suscripciones WHERE idUsuarioCom = ?`;
    executeQuery(query, [idUsuarioCom.idUsuarioCom]).then((rows) => {
        if (rows.length === 0) {
            res.json({ message: `El comerciante '${nombreComerciante}' no tiene suscripciones` });
        } else {
            res.json(rows[0]);
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    });
}

module.exports = {
    getSuscripciones_models,
    getSuscripcionesDeComerciante_models,
}
