//conexion a la base de datos y consultas crud a la base de datos

const db = require('../../database/db');


const getComerciantes = (req, res) => {
    try {
        const query = 'SELECT * FROM UsuariosComerciantes';
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

const getComerciante = (req, res) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM UsuariosComerciantes WHERE idUsuarioCom = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'El comerciante no existe'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}


const createComerciante = (req, res) => {
    try {
        const { nombre, telefono, paginaWeb, ubicacion } = req.body;
        console.log(req.body);
        const query = `INSERT INTO UsuariosComerciantes (nombre, telefono, paginaWeb, ubicacion) VALUES ('${nombre}', '${telefono}', '${paginaWeb}', '${ubicacion}')`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Comerciante creado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }

}

const deleteComerciante = (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM UsuariosComerciantes WHERE idUsuarioCom = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.affectedRows == 0){
                res.json({
                    message: 'El comerciante no existe'
                });
                return;
            }
            res.json({
                message: 'Comerciante eliminado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const updateComerciante = (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono, paginaWeb, ubicacion } = req.body;
        const query = `UPDATE UsuariosComerciantes SET nombre = '${nombre}', telefono = '${telefono}', paginaWeb = '${paginaWeb}', ubicacion = '${ubicacion}' WHERE idUsuarioCom = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.affectedRows == 0){
                res.json({
                    message: 'El comerciante no existe'
                });
                return;
            }
            res.json({
                message: 'Comerciante actualizado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}




module.exports = {
    getComerciantes,
    getComerciante,
    createComerciante,
    deleteComerciante,
    updateComerciante
}
