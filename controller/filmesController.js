const express = require('express');

const router = express.Router();

const filmesModel = require ('../model/filmesModel.js');

router.post('filmes/inserir', (req, res)=>{
    let nome_filmes = req.body.nome_filmes

    filmesModel.create(
        {nome_filmes}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `O filme ${nome_filmes} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar o filme ${nome_filmes}.`
        })
    })
})

router.get('/filmes/selecionar', (req,res)=>{
    (filmesModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/filmes/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_filmes = req.body.nome_filmes;
    
    filmesModel.update(
        {nome_filmes},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O filme foi alterado para ${nome_filmes} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O filme ${nome_filmes}, não pode ser atualizado`
        })
    })

})

router.delete('/filmes/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    filmesModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O filme com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`O filme com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;