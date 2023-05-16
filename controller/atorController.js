const express = require('express');

const router = express.Router();

const atorModel = require ('../model/atorModel.js');

router.post('/ator/inserir', (req, res)=>{
    let nome_ator = req.body.nome_ator; 

    atorModel.create(
        {nome_ator}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O Ator ${nome_ator} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o Ator ${nome_ator}.`
        })
    })
})

router.get('/ator/selecionar', (req,res)=>{
    (atorModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/ator/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_ator = req.body.nome_ator;
    
    atorModel.update(
        {nome_ator},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome do Ator foi alterado para ${nome_ator} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome do Ator para ${nome_ator}.`
        })
    })

})

router.delete('/ator/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    atorModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O Ator com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O Ator com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;