const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('\nConexión exitosa a la base de datos:');
    console.log('\t---- > Host: ' + process.env.DB_HOST);
    console.log('\t---- > Usuario: ' + process.env.DB_USER);
    console.log('\t---- > Base de datos: ' + process.env.DB_NAME);
});

module.exports = connection;
