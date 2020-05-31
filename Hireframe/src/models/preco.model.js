const sequelize = require('sequelize');
const db = require('../config/database');
const servico = require('../models/servico.model');


var preco= db.define('preco_servicos',  {
    id_preco_servico: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    base: sequelize.INTEGER,
    padrao: sequelize.INTEGER,   
    premium: sequelize.INTEGER,
    id_servico: {
        type: sequelize.INTEGER,
        reference: {model: servico, key: "id_servico"}
    }
},
{
timestamps: false, 
tableName: 'preco_servico'

});

 

module.exports = preco;


