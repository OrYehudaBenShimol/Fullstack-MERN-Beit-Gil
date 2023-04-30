// for reading from the .env file.
require('dotenv').config();             
const fs = require('fs');
const cron = require('node-cron');
const express = require('express');

const PatientAttendence  = require('./models/attendenceModel');
const MorningMeeting = require('./models/morningMeetingModel');
const usersRoute = require('./routes/users');
const patientsRoute = require('./routes/patients');
const loginRoutes = require('./routes/login');
const attendence = require('./routes/patientsAttendence');
const userData = require('./routes/getDataOnUsers');
const morningMeetingRoute = require('./routes/morningMeeting');
const allSchedule = require('./routes/allSchedule');


const mongoose = require('mongoose');

//  express app
const app = express();


// middlewares
app.use(express.json());



app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/login',loginRoutes);
app.use('/api/users',usersRoute);
app.use('/api/patient', patientsRoute);
app.use('/api/attendence', attendence);
app.use('/api/getDataOnUser',userData);
app.use('/api/morningMeeting',morningMeetingRoute);
app.use('/api/schedule',allSchedule);


// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//  listen for requests 
    app.listen(process.env.PORT,()=>{
        console.log('Connected to the database and listening on port', process.env.PORT);
    });
}).catch((error)=>{
    console.log(error);
})


// Function to dump table to JSON file and delete from database
async function dumpTableToJson() {
    try {
      const data = await PatientAttendence.find({}).lean().exec(); // Get data from MongoDB
      const data2 = await MorningMeeting.find({}).lean().exec(); // Get data from MongoDB

      const filePath = './morning-attendence.json';
      const filePath2 = './morning-meeting.json';

      fs.appendFile(filePath, "{" + JSON.stringify(data) +"},", (err) => { // Append data to file
        if (err) throw err;
        console.log(`Data written to ${filePath}`);
      });
  
      fs.appendFile(filePath2, "{" + JSON.stringify(data2)+"},", (err) => { // Append data to file
        if (err) throw err;
        console.log(`Data written to ${filePath2}`);
      });
  
      await MorningMeeting.deleteMany(); // Delete data from MongoDB
      console.log('Table data deleted from database');
      await PatientAttendence.deleteMany(); // Delete data from MongoDB
      console.log('Table data deleted from database');
    } catch (err) {
      console.error(err);
    }   
  }
  // Schedule the function to run at the same time each day
  cron.schedule('10 23 * * *', () => {
    dumpTableToJson();
  });

