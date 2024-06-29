//conexion a la base de datos y consultas crud a la base de datos

const db = require('../../database/db');


const getComerciantes = (req, res) => {
    res.json({
        message: 'Get all comerciantes'
    });
}

module.exports = {
    getComerciantes
}
