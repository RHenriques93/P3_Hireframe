const sequelize = require('sequelize');
const db = require('../config/database');

var hireframedb = db.define('img_services',  {
    id_img_serv: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    img_serv: sequelize.STRING,
    id_servico: sequelize.INTEGER,
},
{
timestamps: false, 
tableName: 'img_service'

});

module.exports = hireframedb;


