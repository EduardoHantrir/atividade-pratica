//Importação do sequeliza
const sequelize = require('sequelize');



const connection =  new sequelize(
    'moviewave',
    'root', 
    '',
    {
        host:'localhost',
        port:'3306',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;

//Criação de conexão com o banco de dados