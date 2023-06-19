const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a new schema for a schedule object in the DB (title, day, startTime, endTime, classRoom, englishTitle).
const allSchedule = new Schema({
    title:{
        type: String,
        require: true
    },
    day:{
        type:String,
        require:true,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    },
    startTime:{
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
          },
          message: props => `${props.value} is not a valid start time! Please use the format hh:mm.`
        }
    },
    endTime:{
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
          },
          message: props => `${props.value} is not a valid end time! Please use the format hh:mm.`
        }
    },
    classRoom:{
      type:String,
      require:true,
      enum: ['oren', 'sahlav', 'rakefet', 'dekel', 'gefen','tzivoni'],
    },
    englishTitle:{
      type: String,
      require: true
    }

}, {timestamps:true});


module.exports = mongoose.model('allSchedule',allSchedule);

