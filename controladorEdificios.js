const { request, response } = require('express');

var edificios = require('./modeloEdificios'),
    express=require('express'),
    rutas=express.Router();

    rutas.post('/obtenerEdificio',(request,response)=> {
        edificios.find({},(err , datos)=>{
            if(err){
                console.log(err);
                throw err;
            }
            response.status(200).json(datos);
        })
    })

    rutas.post('/crearEdificio' , (request,response)=>{
        var body=request.body;
        edificios.insertMany({
            idEdificio:body.idEdificio,
            dimension: body.dimension,
            area:body.area,
            barrio:body.barrio,
            sector:body.sector,
            altura:body.altura,
            color:body.color,
            calleprincipal:body.calleprincipal
        },(err,res)=> {
            if(err){
                console.log(err);
                throw err;
            }
            response.status(200).json(res);
        }
        )
    })

    rutas.post('/editarEdificio', (request,response)=>{
        var body = request.body;
        edificios.updateOne({
            idEdificio:body.idEdificio,
        },{
            dimension: body.dimension,
            area:body.area,
            barrio:body.barrio,
            sector:body.sector,
            altura:body.altura,
            color:body.color,
            calleprincipal:body.calleprincipal

        },(err,res)=> {
            if(err){
                console.log(err);
                throw err;
            }
            response.status(200).json(res);
        }
        )
    })

    rutas.post('/eliminarEdificio',(request,response)=>{
        var body = request.body;
        edificios.updateOne({
            idEdificio:body.idEdificio,
        },(err,res)=> {
            if(err){
                console.log(err);
                throw err;
            }
            response.status(200).json(res);
        })
    })
    
    module.exports = rutas;