const db = require('../../database/db');
const util = require('util');

// Promisificar el método db.query
const queryAsync = util.promisify(db.query).bind(db);

const getComerciantes = async (req, res) => {
    try {
        const query = 'SELECT * FROM UsuariosComerciantes';
        const rows = await queryAsync(query);

        if (rows.length === 0) {
            return res.json({
                message: 'No hay comerciantes registrados'
            });
        }

        res.json(rows);
    } catch (error) {
        console.error('Error de conexión:', error);
        res.status(500).json({
            error: 'Error al obtener comerciantes'
        });
    }
}

module.exports = {
    getComerciantes
}
