const mysql = require('mysql');
const Sequelize = require('sequelize');
const keys = require('./keys');

const connection = require("./connection");

class DB {
   // Keeping a reference to the connection on the class in case we need it later
   constructor(connection) {
     this.connection = connection;
   }

//what do we want to grab from the database?

// gender identity in order to filter
// birthday in order to filter (by age)
// instrument in order to filter
// location in order to filter
// genre_preferences to compare compatibility score
// liked_users and disliked_users to see if they were liked/disliked before






}
// var connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
//    host: keys.dbConfig.host,
//    dialect: "mysql"
// });

let connection;
if (process.env.JAWSDB_URL) {
   connection = new Sequelize(process.env.JAWSDB_URL)
}
else {
	connection = new Sequelize(keys.dbConfig.db, keys.dbConfig.user, keys.dbConfig.pass, {
      host: keys.dbConfig.host,
      dialect: "mysql"
   });
}




module.exports = connection;

