const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-database-fk.alwaysdata.net',
    user: '359795',
    password: 'turismo_cac',
    database: 'database-fk_tursimo'
});

//comprobar a conexion
connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);

    // Hacer una query a la tabla Clientes
    connection.query('SELECT * FROM Clientes', (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:');
        console.log(rows);

        // cerrar la conexion
        connection.end((err) => {
            if (err) {
                console.error('Error ending the connection: ' + err.stack);
                return;
            }
            console.log('Connection ended.');
        });
    });
});
