const executeQuery = require('../utils/executeQuery');

const getCategorias_models = (req, res) => {
    const query = 'SELECT Nombre FROM Categoria';
    executeQuery(query).then((results) => {
        if(results.length === 0){
            res.json({message: 'No hay categorias'});
        }
        else{
            res.json(results);
        }
        }).catch((error) => {
            console.error('El error de conexión es: ' + error);
        });
};

const createCategoria_models = (req, res) => {
    const { Nombre } = req.body;
    if (!Nombre) {
        return res.status(400).json({ message: 'El campo Nombre es obligatorio' });
    
    }
    const query = `INSERT INTO Categoria (Nombre) VALUES (?)`;
    executeQuery(query, [Nombre])
        .then((results) => {
            if (results.affectedRows === 0) {
                res.json({ message: 'No se pudo crear la categoria' });
            } else {
                res.json({ message: 'Categoria creada correctamente' });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error en la creación de la categoria', error });
        });
};


const getCategoria_models = (req, res) => {
    const { Nombre } = req.params;
    const query = `SELECT idCategoria FROM Categoria WHERE Nombre = ?`;
    executeQuery(query, [Nombre]).then((results) => {
        if (results.length === 0) {
            res.json({message: 'La categoria no existe'});
        }else{
            res.json(results[0])
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
    });

}


const deleteCategoria_models = (req, res) => {    
    const { Nombre } = req.body;
    const query = `DELETE FROM Categoria WHERE Nombre = ?`;
    executeQuery(query, [Nombre]).then((results) => {
        if (results.affectedRows === 0) {
            res.json({ message: 'La categoria no existe' });
        } else {
            res.json({ message: 'Categoria eliminada correctamente' });
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
    });
}


module.exports = {
    getCategorias_models,
    createCategoria_models,
    getCategoria_models,
    deleteCategoria_models,
}
