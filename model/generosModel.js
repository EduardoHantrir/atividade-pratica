const sequelize = require ('sequelize');

const connection = require ('../database/database');


const generos = connection.define(
    'tbl_generos',
    {
        nome_generos:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//generos.sync({force:true});

module.exports = generos;