const sequelize = require('sequelize');
const db = require('../config/database');

const subarea = require('../models/subarea.model');
const area = require('../models/area.model');
const user = require('../models/utilizador.model');

var requisicao = db.define('requisicaos',  {
    id_requisicao: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    id_utilizador: sequelize.INTEGER,
    id_subarea: sequelize.INTEGER,   
    data: sequelize.DATE,
    nome_projeto: sequelize.STRING,
    descricao: sequelize.STRING,
    preco: sequelize.INTEGER,
    img_req: sequelize.STRING,
},
{
timestamps: false, 
tableName: 'requisicao'

});



requisicao.belongsTo(subarea,  {foreignKey: 'id_subarea'
  });


subarea.belongsTo(area,  {foreignKey: 'id_area'
  });


requisicao.belongsTo(user,  {foreignKey: 'id_utilizador'
  });
 
 



module.exports = requisicao;