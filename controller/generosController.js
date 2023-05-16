const express = require('express');

const router = express.Router();

const generosModel = require ('../model/generosModel.js');

router.post('/generos/inserir', (req, res)=>{
    let nome_generos = req.body.nome_generos; 

    generosModel.create(
        {nome_generos}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O genero ${nome_generos} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o genero ${nome_generos}.`
        })
    })
})

router.get('/generos/selecionar', (req,res)=>{
    (generosModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/generos/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_generos = req.body.nome_generos;
    
    generosModel.update(
        {nome_generos},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome do genero foi alterado para ${nome_generos} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome do genero para ${nome_generos}.`
        })
    })

})

router.delete('/generos/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    generosModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O genero com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O genero com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;