const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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