
const getComerciantes = (req, res) => {
    res.json({
        message: 'Esta es la ruta para obtener todos los Comerciantes'
    });
}

const createComerciantes = (req, res) => {
    let { nombre } = req.body;
    console.log(nombre);
    res.json({
        message: 'Comerciante guardado correctamente: ' + nombre,
    });
}

module.exports = {
    getComerciantes,
    createComerciantes
}
