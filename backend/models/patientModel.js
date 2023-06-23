const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Create a new schema for a patient object in the DB (name, id, cellphone, dateOfBirth, role, classRoom, hebrewName, image).
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
    // image: Buffer,          // Works only if we want to save the image in the DB. Because its takes to much space, we decided to save the image in the server.


}, {timestamps:true});


module.exports = mongoose.model('Patient',patientSchema);

