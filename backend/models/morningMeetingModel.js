const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Create a new schema for a morning meeting object in the DB (id, hebrewName, feeling, arrived, classRoom).
const MorningMeeting = new Schema({
    id:{
        type: Number,
        require: true,
    },
    hebrewName:{
        type:String,
        require:true
    },
    feeling:{
        type:String,
        require:true,
        default:''
    },
    arrived:{
        type:Boolean,
        require:true,
        default:false
    },
    classRoom:{
        type:String,
        require:true
    }
}, {timestamps:true});


module.exports = mongoose.model('MorningMeeting',MorningMeeting);