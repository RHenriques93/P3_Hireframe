const sequelize = require('sequelize');
const ligacao = new sequelize('hireframedb', 'root', '', 
    { 
        host: 'localhost',
        dialect: 'mysql',
                         
    }
);

module.exports = ligacao;


