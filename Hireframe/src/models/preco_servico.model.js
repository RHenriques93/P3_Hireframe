const sequelize = require('sequelize');
const db = require('../config/database');

var hireframedb = db.define('preco_servicos',  {
    id_preco_servico: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    base: sequelize.INTEGER,
    padrao: sequelize.INTEGER,   
    premium: sequelize.INTEGER,
    id_servico: sequelize.INTEGER,
},
{
timestamps: false, 
tableName: 'preco_servico'

});

module.exports = hireframedb;
