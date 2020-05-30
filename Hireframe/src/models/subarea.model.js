const sequelize = require('sequelize');
const db = require('../config/database');

var subarea = db.define('subareas',  {
    id_subarea: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    id_area: sequelize.INTEGER,
    data: sequelize.DATE,
    nome: sequelize.STRING,
    img_subarea: sequelize.STRING,
},
{
timestamps: false, 
tableName: 'subarea'

});


module.exports = subarea;