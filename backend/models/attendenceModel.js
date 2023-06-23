const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a new schema for a attendence object in the DB (id, classRoom, hebrewName, arrived, image).
const attendenceSchema = new Schema({
    id:{
        type: Number,
        require: true,
    },
    classRoom:{
        type:String,
        require:true
    },
    hebrewName:{
        type:String,
        require:true
    },
    arrived:{
        type:Boolean,
        default:false
    },
    // image: Buffer,


}, {timestamps:true});


module.exports = mongoose.model('PatientAttendence',attendenceSchema);

