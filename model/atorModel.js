const sequelize = require ('sequelize');

const connection = require ('../database/database');


const ator = connection.define(
    'tbl_ator',
    {
        nome_ator:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//ator.sync({force:true});

module.exports = ator;