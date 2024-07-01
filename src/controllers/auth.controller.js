const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const { createComerciante_models, getComercianteNombre_models } = require('../../models/comerciantes.model');

const register = async (req, res) => {
    try {
        const { nombre, contrasenia } = req.body;
        const hashedPassword = bycrypt.hashSync(contrasenia, 8);
        req.body.contrasenia = hashedPassword;

        const id = await createComerciante_models(req, res);
        console.log(id);

        const token = jwt.sign({ idUser: id }, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        res.send({ auth: true, token: token, id: id });
    } catch (error) {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ message: 'Error al registrar el comerciante' });
    }
}

const login = async (req, res) => {
    const { nombre, contrasenia } = req.body;
    console.log('Este es el usuario que esta intentando iniciar sesion\n', req.body);
    try {
        const usuario = await getComercianteNombre_models(nombre);
        if (!usuario) {
            res.json({
                message: 'El comerciante no existe'
            });
        }
        
        const passwordIsValid = bycrypt.compareSync(contrasenia, usuario.contrasenia);
        if (!passwordIsValid) {
            return res.status(401).json({ auth: false, token: null });
        }

        const token = jwt.sign({ idUser: usuario.idUsuarioCom }, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        res.send({ auth: true, token: token, id: usuario.idUsuarioCom });
    } catch (error) {
        console.error('El error de conexión es: ' + error);
        res.status(500).json({ message: 'Error al obtener el comerciante' });
    }
}


module.exports = {
    register,
    login
}