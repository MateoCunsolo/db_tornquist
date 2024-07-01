const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader)
        return res
        .status(401)
        .json({ message: 'No autorizado' });

        const token = authHeader.split(' ')[1];

        if (!token)return res.status(401).json({ message: 'No autorizado' });
        
        jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
                if (error) {
                    return res.status(403).json({ message: 'Token mal formado' });
                }
                req.id = decode.idUser;
                next();
            });
}