//conexion a la base de datos y consultas crud a la base de datos

const db = require('../../database/db');

const getCategorias = (req, res) => {
    try {
        const query = 'SELECT * FROM Categoria';
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay categorias registradas'
                });
                return;
            }
            res.json(rows);
        }
        );
    }catch(error)
    {
        console.log('El error de conexión es: ' + error);
    }
}

const createCategoria = (req, res) => {
    try {
        const { nombre } = req.body;
        console.log(req.body);
        const query = `INSERT INTO Categorias (Nombre) VALUES ('${nombre}')`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Categoria creada correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const getCategoria = (req, res) => {
    try {
        const { id } = req.params;
        const query = `SELECT * FROM Categoria WHERE idCategoria = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'La categoria no existe'
                });
                return;
            }
            res.json(rows);
        });
    }catch(error)
    {
        console.log('El error de conexión es: ' + error);
    }
}


const deleteCategoria = (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM Categoria WHERE idCategoria = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay categorias registradas'
                });
                return;
            }
            res.json(rows);
        });
    }catch(error)
    {
        console.log('El error de conexión es: ' + error);
    }
}

const updateCategoria = (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const query = `UPDATE Categoria SET Nombre = '${nombre}' WHERE idCategoria = ${id}`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'No hay categorias registradas'
                });
                return;
            }
            res.json({
                message: 'Categoria actualizada correctamente'
            });
        });
    }catch(error)
    {
        console.log('El error de conexión es: ' + error);
    }
}


module.exports = {
    getCategorias,
    createCategoria,
    getCategoria,
    deleteCategoria,
    updateCategoria
}
