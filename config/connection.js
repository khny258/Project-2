const mysql = require('mysql');
const Sequelize = require('sequelize');
const keys = require('./keys');

// const connection = require("./connection");

var connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
   host: keys.dbConfig.host,
   dialect: "mysql"
});

// let connection;
if (process.env.JAWSDB_URL) {
   connection = new Sequelize(process.env.JAWSDB_URL)
}
else {
	connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
      host: keys.dbConfig.host,
      dialect: "mysql"
   });
}

//arthur's insert
// const util = require("util");
// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   // Your username
//   user: "root",
//   // Your password
//   password: "1Toronto",
//   database: "timbr_db"
// });
// connection.connect();
// // Setting up connection.query to use promises instead of callbacks
// // This allows us to use the async/await syntax
// connection.query = util.promisify(connection.query);
// module.exports = connection;
//----------------





module.exports = connection;

