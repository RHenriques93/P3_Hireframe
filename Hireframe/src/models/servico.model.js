const sequelize = require('sequelize');
const db = require('../config/database');

const subarea = require('../models/subarea.model');
const area = require('../models/area.model');
const utilizador = require('../models/utilizador.model');
const preco = require('../models/preco.model');

var servico = db.define('servico',  {
    id_servico: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    id_utilizador: sequelize.INTEGER,
    id_subarea: sequelize.INTEGER,   
    data: sequelize.DATE,
    descricao: sequelize.STRING,
},
{
timestamps: false, 
tableName: 'servico'

});


var img_serv = db.define('img_services',  {
    id_img_serv: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    img_serv: sequelize.STRING,
    id_servico: {
        type: sequelize.INTEGER,
        reference: {model: servico, key: "id_servico"}
    }
},
{
timestamps: false, 
tableName: 'img_service'

});



servico.hasOne(preco,  {foreignKey: 'id_servico'
});


servico.hasMany(img_serv, {foreignKey: 'id_servico'});


servico.belongsTo(subarea,  {foreignKey: 'id_subarea'
});


subarea.belongsTo(area,  {foreignKey: 'id_area'
});


servico.belongsTo(utilizador,  {foreignKey: 'id_utilizador'
});
 
 

module.exports = servico;


