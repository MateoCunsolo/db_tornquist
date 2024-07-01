const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const db = require('../../database/db');

const register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const hashedPassword = await bycrypt.hash(password, 10);
        const query = `INSERT INTO Usuario (nombre, email, password) VALUES ('${nombre}', '${email}', '${hashedPassword}')`;
        db.query(query, (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }
            res.json({
                message: 'Usuario creado correctamente'
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const query = `SELECT * FROM Usuario WHERE email = '${email}'`;
        db.query(query, async (error, rows) => {
            if (error) {
                console.error('El error de conexión es: ' + error);
                return;
            }else if(rows.length == 0){
                res.json({
                    message: 'El usuario no existe'
                });
                return;
            }
            const user = rows[0];
            const validPassword = await bycrypt.compare(password, user.password);
            if (!validPassword) {
                res.json({
                    message: 'La contraseña no es válida'
                });
                return;
            }
            const token = jwt.sign({ id: user.idUsuario, email: user.email }, process.env.SECRET_KEY, {
                expiresIn: 86400
            });
            res.json({
                message: 'Login correcto',
                token
            });
        });
    }catch (error) {
        console.error('El error de conexión es: ' + error);
    }
}

module.exports = {
    register,
    login
}