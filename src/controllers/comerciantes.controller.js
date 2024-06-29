const util = require('util');
const pool = require('../../database/db');

// Promisificar el método query del pool de conexiones
const queryAsync = util.promisify(pool.query).bind(pool);

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
