const executeQuery = require("../utils/executeQuery");
const { getComercianteNombre_models } = require("./comerciantes.model");


const getClientes_models = (req, res) => {
    const query = 'SELECT * FROM Clientes';
    executeQuery(query).then((results) => {
        if (results.length === 0) {
            res.json({ message: 'No hay clientes registrados' });
        } else {
            res.json(results);
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    });
};

const createCliente_models = async (req, res) => {
    const { mail, ciudad, nombreComerciante } = req.body;
    try {
        // Insertar el cliente en la tabla Clientes
        const insertClienteQuery = 'INSERT INTO Clientes (mail, ciudad) VALUES (?, ?)';
        const result = await executeQuery(insertClienteQuery, [mail, ciudad]);
        const clienteId = result.insertId;

        // Verificar si el comerciante existe
        const idUsuarioCom = await getComercianteNombre_models(nombreComerciante);
        if (!idUsuarioCom) {
            const deleteClienteQuery = 'DELETE FROM Clientes WHERE idClientes = ?';
            await executeQuery(deleteClienteQuery, [clienteId]);
            return res.status(400).json({ error: 'El comerciante no existe' });
        }

        // Insertar en la tabla Suscripciones
        const insertSuscripcionQuery = 'INSERT INTO Suscripciones (idUsuarioCom, idClientes) VALUES (?, ?)';
        await executeQuery(insertSuscripcionQuery, [idUsuarioCom.idUsuarioCom, clienteId]);
        res.json({ message: 'Cliente creado correctamente' });

    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'El cliente ya existe' });
        }
        console.error('Error en la creación del cliente:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const deleteCliente_models = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Clientes WHERE idClientes = ?';
    executeQuery(query, [id]).then((results) => {
        if (results.affectedRows === 0) {
            res.json({ message: 'El cliente no existe' });
        } else {
            res.json({ message: 'Cliente eliminado correctamente' });
        }
    }).catch((error) => {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ error: 'Error en el servidor' });
    });
};

module.exports = {
    getClientes_models,
    createCliente_models,
    deleteCliente_models
};
