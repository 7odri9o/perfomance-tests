const mysql = require('mysql2/promise')
const config = {
    connectionLimit: 100,
    host: 'localhost',
    user: 'user_poc',
    password: '123mudar',
    database: 'poc_databases',
    port: 3306,
    waitForConnections: true
}

module.exports = mysql.createPool(config)
