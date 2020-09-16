var mongoose=require("mongoose");
Schemas=mongoose.Schema;
var atributos = new Schemas({
    idEdificio:{type:Number,trim:true},
    dimension:{type:String,trim:true},
    area:{type:String,trim:true},
    barrio:{type:String,trim:true},
    sector:{type:String,trim:true},
    altura:{type:String,trim:true},
    color:{type:String,trim:true},
    calleprincipal:{type:String,trim:true}

});
var edificios =mongoose.model('edificios',atributos);
module.exports=edificios;