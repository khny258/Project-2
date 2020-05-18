const mysql = require('mysql');
const Sequelize = require('sequelize');
const keys = require('./keys');

<<<<<<< HEAD
// const connection = require("./connection");

var connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
   host: keys.dbConfig.host,
   dialect: "mysql"
});

// let connection;
=======
// var connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
//    host: keys.dbConfig.host,
//    dialect: "mysql"
// });
var connectionSQL = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "rootroot",
   database: "timbr_db"
 });

 
let connection;
>>>>>>> 4749ac36dae75ddb13e933bb292ecefe2ec17910
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
<<<<<<< HEAD

=======
module.exports = connectionSQL;
>>>>>>> 4749ac36dae75ddb13e933bb292ecefe2ec17910
