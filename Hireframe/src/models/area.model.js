const sequelize = require('sequelize');
const db = require('../config/database');

var area = db.define('areas',  {
    id_area: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    data: sequelize.DATE,
    nome: sequelize.STRING,
    descricao: sequelize.STRING,
    img_area: sequelize.STRING,
},
{
timestamps: false, 
tableName: 'area'

});

module.exports = area;