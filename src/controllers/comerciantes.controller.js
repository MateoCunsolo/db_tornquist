//conexion a la base de datos y consultas crud a la base de datos

const db = require('../database/db');


const getComerciantes = (req, res) => {
    try {
        const query = 'SELECT * FROM comerciantes';
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay comerciantes registrados'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

module.exports = {
    getComerciantes,
    createComerciantes
}
