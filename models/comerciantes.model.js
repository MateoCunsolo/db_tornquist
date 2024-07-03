const executeQuery = require('../utils/executeQuery');

const getComerciantes_models = (req, res) => {
    const query = 'SELECT idUsuarioCom, nombre,telefono, paginaWeb, ubicacion FROM UsuariosComerciantes';
    executeQuery(query).then((results) => {
        if(results.length === 0){
            res.json({message: 'No hay comerciantes'});
        }
        else{
            res.json(results);
        }
        }).catch((error) => {
            console.error('El error de conexión es: ' + error);
        });
};

const getComerciante_models = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT nombre, telefono, paginaWeb, ubicacion FROM UsuariosComerciantes WHERE idUsuarioCom = ?';
    executeQuery(query, [id]).then((results) => {
        if (results.length === 0) {
            res.json({message: 'El comerciante no existe'});
        }else{
            res.json(results[0])
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
    });
};


const getComercianteNombre_models = (nombre) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT idUsuarioCom, contrasenia FROM UsuariosComerciantes WHERE nombre = ?';
        executeQuery(query, [nombre]).then((results) => {
            if (results.length === 0) {
                resolve(null);
            } else {
                resolve(results[0]);
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

const createComerciante_models = (req, res) => {
    return new Promise((resolve, reject) => {
        const { nombre, telefono, contrasenia } = req.body;
        const query = `INSERT INTO UsuariosComerciantes (nombre, telefono, contrasenia) VALUES (?, ?, ?)`;
        executeQuery(query, [nombre, telefono, contrasenia]).then((results) => {
            resolve(results.insertId);
        }).catch((error )=> {
            reject(error);
        });
    });
}

const deleteComerciante_models = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM UsuariosComerciantes WHERE idUsuarioCom = ?`;
    executeQuery(query, [id]).then((results) => {
        if (results.affectedRows === 0) {
            res.json({ message: 'El comerciante no existe' });
        } else {
            res.json({ message: 'Comerciante eliminado correctamente' });
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
    });
}

const updateComerciante_models = (req, res) => {
        const { id } = req.params;
        const { nombre, telefono, paginaWeb, ubicacion } = req.body;
        if (!nombre || !telefono || !paginaWeb || !ubicacion) {
            res.json({ message: 'Faltan campos por llenar: ' 
                + (!nombre ? 'nombre, ' : '') 
                + (!telefono ? 'telefono, ' : '') 
                + (!paginaWeb ? 'paginaWeb y ' : '') 
                + (!ubicacion ? 'ubicacion' : '')});
        }
        const query = `UPDATE UsuariosComerciantes SET nombre = ?, telefono = ?, paginaWeb = ?, ubicacion = ? WHERE idUsuarioCom = ?`;
        executeQuery(query, [nombre, telefono, paginaWeb, ubicacion, id]).then((results) => {
            if (results.affectedRows === 0) {
                res.json({ message: 'El comerciante no existe' });
            } else {
                res.json({ message: 'Comerciante actualizado correctamente' });
            }
        }).catch((error) => {
            console.error('El error de conexión es: ' + error);
        });
}


module.exports = {
    getComerciantes_models,
    getComerciante_models,
    createComerciante_models,
    deleteComerciante_models,
    updateComerciante_models,
    getComercianteNombre_models
}