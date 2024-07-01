const db = require('../database/db');

const getComerciantes_models = (req, res) => {
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

const getComerciante_models = (req, res) => {
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

const getComercianteNombre_models = (nombre) => {
    return new Promise((resolve, reject) => {
        try {
            const query = `SELECT * FROM UsuariosComerciantes WHERE nombre = ?`;
            db.query(query, [nombre], (error, rows) => {
                if (error) {
                    console.error('El error de conexión es: ' + error);
                    reject(error);
                } else if (rows.length === 0) {
                    resolve(null);
                } else {
                    resolve(rows[0]);
                }
            });
        } catch (error) {
            console.error('El error de conexión es: ' + error);
            reject(error);
        }
    });
}



const createComerciante_models = (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            const { nombre, telefono, paginaWeb, ubicacion, contrasenia } = req.body;
            const query = `INSERT INTO UsuariosComerciantes (nombre, contrasenia, paginaWeb, ubicacion, telefono) VALUES (?, ?, ?, ?, ?)`;
            db.query(query, [nombre, contrasenia, paginaWeb, ubicacion, telefono], (error, rows) => {
                if (error) {
                    console.error('El error de conexión es: ' + error);
                    reject(error);
                } else {
                    resolve(rows.insertId);
                }
            });
        } catch (error) {
            console.error('El error de conexión es: ' + error);
            reject(error);
        }
    });
}


const deleteComerciante_models = (req, res) => {
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

const updateComerciante_models = (req, res) => {
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
    getComerciantes_models,
    getComerciante_models,
    createComerciante_models,
    deleteComerciante_models,
    updateComerciante_models,
    getComercianteNombre_models
}