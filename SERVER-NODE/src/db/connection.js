var mysql      = require('mysql');

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'childcare'
  });

module.exports = connection