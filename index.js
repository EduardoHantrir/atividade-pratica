const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.send('Inicio do MovieWave um site para ver filmes e series')
  })
  
  app.listen(3000);

  /*Criação das rotas controller */


  const autorController = require('./controller/autorController');
  app.use('/', autorController);