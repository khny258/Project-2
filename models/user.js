const sequelize = require('sequelize')
const connection = require('../config/connection');

let User = connection.define("User", {
    // Giving the Users model a name of type STRING
    username: sequelize.STRING,
    password: sequelize.STRING,
    name: sequelize.STRING,
    age: {
      type: sequelize.INTEGER,
      allowNull: false,
      len: [1, 2]
    },
    location: sequelize.STRING,
    style: sequelize.INTEGER,
    platform: sequelize.INTEGER,
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    photo: sequelize.STRING,
    instrument: sequelize.STRING,
    birthDay: sequelize.STRING,
    location: sequelize.STRING,
    gender: sequelize.STRING,
    partnerGender: sequelize.STRING,
    scores: sequelize.STRING,
    myBio: sequelize.TEXT,
  })


  
module.exports = User;