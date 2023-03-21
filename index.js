const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Inicio do MovieWave um site para ver filmes e series')
  })
  
  app.listen(3000);