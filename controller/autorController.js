const express = require('express');

//Gerenciador de rotas
const router = express.Router();

//Rota de inserção de Categoria (POST)
router.post('/autor/inserir', (req, res)=>{
    res.send('Rota de categoria de inserção');
})

//Rota de seleção de Categoria (GET)
router.get('/autor/selecionar', (req, res)=>{
    res.send('Rota de categoria de seleção');
})

//Rota de alteração de Categoria (PUT)
router.put('/autor/alterar', (req,   res)=>{
    res.send('Rota de categoria de alteração');
})

//Rota de exclusão de Categoria (DELETE)
router.delete('/autor/excluir', (req, res)=>{
    res.send('Rota de categoria de exclusão');
})

module.exports = router;