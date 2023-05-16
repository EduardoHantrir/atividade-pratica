const sequelize = require ('sequelize');

const connection = require ('../database/database');


const filmes = connection.define(
    'tbl_filmes',
    {
        nome_filmes:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//filmes.sync({force:true});

module.exports = filmes;