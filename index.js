
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

// Criação de Rotas
const filmesController = require('./controller/filmesController');
app.use('/', filmesController);

const seriesController = require('./controller/seriesController');
app.use('/', seriesController);

app.listen(3000, ()=>{ 
  console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});