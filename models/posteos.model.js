const executeQuery = require('../utils/executeQuery');

const getPosteos_models = (req, res) => {
    const query = 'SELECT * FROM Posteo';
    executeQuery(query).then((response) => {
        if(response.length == 0){
            res.json({
                message: 'No hay posteos registrados'
            });
        }else
        {
            res.json(response);
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    });
};


const getPosteosPorCategoria_models = async (req, res) => {
    const { NombreCategoria } = req.params;
    let idCategoria = await executeQuery('SELECT idCategoria FROM Categoria WHERE Nombre = ?', [NombreCategoria])
    if (!idCategoria) {
        return res.status(400).json({ message: 'El campo NombreCategoria es obligatorio' });
    }
    else{
        if (idCategoria.length === 0) {
            return res.status(400).json({ message: 'La categoria no existe' });
        }
        else
        {
            idCategoria = idCategoria[0].idCategoria;
            const query = 'SELECT * FROM Posteo WHERE idCategoria = ?';
            executeQuery(query, [idCategoria]).then((response) => {
                if(response.length == 0){
                    res.json({
                        message: 'No hay posteos registrados'
                    });
                }else
                {
                    res.json(response);
                }
            }).catch((error) => {
                console.error('El error de conexión es: ' + error);
                res.status(500).json({ error: 'Error en el servidor' });
            });
        }
    }
};

const getPosteosPorComerciante_models = async (req, res) => {
    const { NombreComerciante } = req.params;
    let idUsuarioCom = await executeQuery('SELECT idUsuarioCom FROM UsuariosComerciantes WHERE nombre = ?', [NombreComerciante])
    if (!idUsuarioCom) {
        return res.status(400).json({ message: 'El campo NombreComerciante es obligatorio' });
    }
    else{
        if (idUsuarioCom.length === 0) {
            return res.status(400).json({ message: 'El comerciante no existe' });
        }
        else
        {
            idUsuarioCom = idUsuarioCom[0].idUsuarioCom;
            const query = 'SELECT * FROM Posteo WHERE idUsuarioCom = ?';
            executeQuery(query, [idUsuarioCom]).then((response) => {
                if(response.length == 0){
                    res.json({
                        message: 'No hay posteos registrados'
                    });
                }else
                {
                    res.json(response);
                }
            }).catch((error) => {
                console.error('El error de conexión es: ' + error);
                res.status(500).json({ error: 'Error en el servidor' });
            });
        }
    }


}



const getPosteo_models = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Posteo WHERE idPosteo = ?';
    executeQuery(query, [id]).then((response) => {
        if(response.length == 0){
            res.json({
                message: 'No hay posteo registrado con ese id'
            });
        }else
        {
            res.json(response[0]);
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    });
};


const createPosteo_models = async (req, res) => {
    const { Titulo, Descripcion, Imagen, idUsuarioCom, NombreCategoria } = req.body;
    console.log(req.body);
    let idCategoria = await executeQuery('SELECT idCategoria FROM Categoria WHERE Nombre = ?', [NombreCategoria])
    if (!idCategoria) {
        return res.status(400).json({ message: 'El campo NombreCategoria es obligatorio' });
    }
    else{
        if (idCategoria.length === 0) {
            return res.status(400).json({ message: 'La categoria no existe' });
        }
        else
        {
            idCategoria = idCategoria[0].idCategoria;
            const query = `INSERT INTO Posteo (Titulo, Descripcion, Imagen, idUsuarioCom, idCategoria) VALUES (?, ?, ?, ?, ?)`;
            executeQuery(query, [Titulo, Descripcion, Imagen, idUsuarioCom, idCategoria]).then((response) => {
             res.json({ message: 'Posteo creado correctamente' });
            }).catch((error) => {
                console.error('El error de conexión es: ' + error);
                res.status(500).json({ error: 'Error en el servidor' });
            });
        }
    }
}
const deletePosteo_models = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM Posteo WHERE idPosteo = ?`;
    executeQuery(query, [id]).then((response) => {
        if (response.affectedRows === 0) {
            res.json({ message: 'El posteo no existe' });
        } else {
            res.json({ message: 'Posteo eliminado correctamente' });
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    });

};

const updatePosteo_models = async (req, res) => {
    const { id } = req.params;
    const { Titulo, Descripcion, Imagen, idUsuarioCom, NombreCategoria } = req.body;
    let idCategoria = await executeQuery('SELECT idCategoria FROM Categoria WHERE Nombre = ?', [NombreCategoria])
    if (!idCategoria) {
        return res.status(400).json({ message: 'El campo NombreCategoria es obligatorio' });
    }
    else{
        if (idCategoria.length === 0) {
            return res.status(400).json({ message: 'La categoria no existe' });
        }
        else
        {
            idCategoria = idCategoria[0].idCategoria;
            console.log(idCategoria);
            const query = `UPDATE Posteo SET Titulo = ?, Descripcion = ?, Imagen = ?, idUsuarioCom = ?, idCategoria = ? WHERE idPosteo = ?`;
            executeQuery(query, [Titulo, Descripcion, Imagen, idUsuarioCom, idCategoria, id]).then((response) => {
                if (response.affectedRows === 0) {
                    res.json({ message: 'El posteo no existe' });
                } else {res.json({ message: 'Posteo actualizado correctamente' });}
            }).catch((error) => {
                console.error('El error de conexión es: ' + error);
                res.status(500).json({ error: 'Error en el servidor' });
            });
        }
    }

};


module.exports = {
    getPosteos_models,
    createPosteo_models,
    getPosteo_models,
    deletePosteo_models,
    updatePosteo_models,
    getPosteosPorComerciante_models,
    getPosteosPorCategoria_models
}