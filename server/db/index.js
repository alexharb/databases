var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
    host: 'http://127.0.0.1:3000/classes/messages',
    user: 'root',
    database: 'chat'
});

connection.connect()

connection.query('some query text', (err, rows, fields) => {
    if (err) {
        throw err;
    } else {
        console.log(rows, 'thats rows', fields, 'thats fields');
    }
})

connection.end();