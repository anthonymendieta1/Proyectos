var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb+srv://ProyectosAnthony:antho.798@proyectosanthony.wyxx1.mongodb.net/ProyectosAnthony?retryWrites=true&w=majority');
mongoose.connection.on('open',(ref)=>{
console.log("Conectado a Mongo Cloud");
});
module.exports=connection;