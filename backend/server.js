require('dotenv').config();             // for reading from the .env file.
const express = require('express');
const usersRoute = require('./routes/users');
const patientsRoute = require('./routes/patients');
const loginRoutes = require('./routes/login')
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

