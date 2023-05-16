const sequelize = require ('sequelize');

const connection = require ('../database/database');


const series = connection.define(
    'tbl_series',
    {
        nome_series:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

//series.sync({force:true});

module.exports = series;