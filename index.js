const express=require("express");
const body_paser=require('body-parser');

//var http=require("http");
//var server=http.createServer();

const app = express();
var connection = require('./conexion');


const rutas = require('./rutas');
app.use(body_paser.json());
app.use(body_paser.urlencoded({extended:true}));
app.use('/' , rutas);

var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("El servidor se inicio correctamente")
});