const sequelize = require('sequelize');
const db = require('../config/database');

var utilizador = db.define('utilizador',  {
    id_utilizador: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    username: sequelize.STRING,
    nome: sequelize.STRING,
    genero: sequelize.STRING,
    email: sequelize.STRING, 
    data_nascimento: sequelize.DATEONLY,
    data: sequelize.DATE,
    pass: sequelize.STRING,
    id_tipo: {
        type: sequelize.INTEGER,
        reference: {model: tipo_utilizador, key: "id_tipo"}
    },
        
    biografia: sequelize.STRING,
    imagem: sequelize.STRING,
    repor_pass: sequelize.STRING,
},
{
timestamps: false, 
tableName: 'utilizador',
});


var tipo_utilizador = db.define('tipo_utilizador',  {
    id_tipo: {type: sequelize.INTEGER, primaryKey: true,
         autoIncrement: true
        },
    nome_tipo: sequelize.STRING,
},
{
timestamps: false, 
tableName: 'tipo_utilizador',
});



utilizador.belongsTo(tipo_utilizador,  {foreignKey: 'id_tipo'
});


module.exports = utilizador;