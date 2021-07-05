const mysql = require('mysql');

var pool = mysql.createPool({
    "user":"root",
    "password":"12345678",
    "database": "desafio",
    "host":"127.0.0.1",
    "port":3340
})

exports.pool=pool;