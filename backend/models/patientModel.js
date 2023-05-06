const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    id:{
        type: Number,
        require: true,
        unique: true 
    },
    cellphone:{
        type:String,
        require:true
    },
    dateOfBirth:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    classRoom:{
        type:String,
        require:true
    },
    hebrewName:{
        type:String,
        require:true
    },
    image: Buffer,


}, {timestamps:true});


module.exports = mongoose.model('Patient',patientSchema);

