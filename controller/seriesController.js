const express = require('express');

const router = express.Router();

const seriesModel = require ('../model/seriesModel.js');

router.post('/series/inserir', (req, res)=>{
    let nome_series = req.body.nome_series; 

    seriesModel.create(
        {nome_series}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: `A serie ${nome_series} foi adicionado com sucesso!`
            })
        }
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: `Não foi possivel adicionar a serie ${nome_series}.`
        })
    })
})

router.get('/series/selecionar', (req,res)=>{
    (seriesModel.findAll()).then(
        (filmes)=>{
            res.json(filmes);
        })

})

router.put('/series/alterar', (req,res)=>{
    let id = req.body.id;
    let nome_series = req.body.nome_series;
    
    seriesModel.update(
        {nome_series},{where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`O nome da serie foi alterado para ${nome_series} com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`Não foi possivel mudar o nome da serie para ${nome_series}.`
        })
    })

})

router.delete('/series/excluir/:id', (req,res)=>{
    let id = req.params.id;
    console.log('ID: ' + id);
    
    seriesModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:`A serie com ID: ${id} deletada com sucesso!`
            })
        }   
    ).catch((error)=>{
        return res.status(500).json({
            errorStatus:true,
            mensageStatus:`A serie com ID: ${id}, não pode ser deletado`
        })
    })
})


module.exports = router;