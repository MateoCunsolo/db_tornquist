const db = require('../database/db');

const getPosteos_models = (req, res) => {
    try {
        const query = 'SELECT * FROM Posteo';
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay posteos registrados'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
};

const createPosteo_models = (req, res) => {
    try {
        const { idPosteo, idUsuarioCom, idCategoria, Titulo, Descripcion, Imagen} = req.body;
        db.query(`INSERT INTO Posteo (idPosteo, idUsuarioCom, idCategoria, Titulo, Descripcion, Imagen) VALUES ('${idPosteo}', '${idUsuarioCom}', '${idCategoria}', '${Titulo}', '${Descripcion}', '${Imagen}')`, 
            (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Posteo creado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const getPosteo_models = (req, res) => {
    try{
        const { id } = req.params;
        const query = `SELECT * FROM Posteo WHERE idPosteo = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'El posteo no existe'
                });
                return;
            }
            res.json(rows);
        });
    }
    catch (error) {
        console.error('El error de conexión es: ' + error);
    }
};


const deletePosteo_models = (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM Posteo WHERE idPosteo = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay posteos registrados'
                });
                return;
            }
            res.json(rows);
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
};

const updatePosteo_models = (req, res) => {
    try {
        const { idPosteo, idUsuarioCom, idCategoria, Titulo, Descripcion, Imagen} = req.body;
        db.query(`UPDATE Posteo SET idUsuarioCom = '${idUsuarioCom}', idCategoria = '${idCategoria}', Titulo = '${Titulo}', Descripcion = '${Descripcion}', Imagen = '${Imagen}' WHERE idPosteo = ${idPosteo}`, 
            (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Posteo actualizado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
};


module.exports = {
    getPosteos_models,
    createPosteo_models,
    getPosteo_models,
    deletePosteo_models,
    updatePosteo_models
}