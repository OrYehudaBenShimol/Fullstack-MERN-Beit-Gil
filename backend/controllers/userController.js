const User = require('../models/userModel');
const Patient = require('../models/patientModel');

const mongoose = require('mongoose');


// Get all users.
const getAllUsers = async ( req,res) =>{
    const users = await User.find({}).sort({name: -1});
    res.status(200).json(users);
}


const getUserByEmail = async (req,res)=>{
    const {email} = req.params
    console.log(email)
    const user = await User.findOne({email:email})
    if(user){
        res.status(200).json(user)
    }
    else{
        return res.json(email)
    }
}

// Get all patients.
const getAllPatients = async ( req,res) =>{
    const patients = await Patient.find({}).sort({name: -1});
    res.status(200).json(patients);
}

// Get a single user.
const getSinglelUser = async ( req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user.'});
    }
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({error:'No such user.'});
    }

    res.status(200).json(user);
}

// Get a single Patient.
const getSinglelPatient = async ( req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such patient.'});
    }
    const patient = await Patient.findById(id);
    if(!patient){
        return res.status(404).json({error:'No such patient.'});
    }

    res.status(200).json(patient);
}


// Create new user.(Manager and employees)
const createNewUser = async (req,res) => {
    const {name,id,email,cellphone,dateOfBirth,role,hebrewName,password} = req.body;


    // initialize a new array of empty fields in the form on the front end.
    let emptyFields = [];
    if(!name){
        emptyFields.push('name')
    }
    if(!id){
        emptyFields.push('id')
    }
    if(!email){
        emptyFields.push('email')
    }
    if(!cellphone){
        emptyFields.push('cellphone')
    }
    if(!dateOfBirth){
        emptyFields.push('dateOfBirth')
    }
    if(!hebrewName){
        emptyFields.push('hebrewName')
    }
    if(!password){
        emptyFields.push('password')
    }

    if(emptyFields.length>0){
        return res.status(400).json({error:'נא למלא את כל השדות באדום', emptyFields})
    }


    // Add new user to the database.
    try {
        const user = await User.signUserToDB(name,id,email,cellphone,dateOfBirth,role,hebrewName,password);
        const userWithoutPassword ={
            _id: user._id ,
            name:  user.name,
            id:user.id,
            email:user.email,
            cellphone:user.cellphone,
            dateOfBirth:user.dateOfBirth,
            role:user.role,
            hebrewName:user.hebrewName
        }
       
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Create new patient.
const createNewPatient = async (req,res) => {
    const {name,id,cellphone,dateOfBirth,role,classRoom,hebrewName} = req.body;
    // Add new user to the database.
    try {
        const patient = await Patient.create({name,id,cellphone,dateOfBirth,role,classRoom,hebrewName});
        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Delete a user.
const deleteUser = async ( req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user.'});
    }
    const user = await User.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({error:'No such user.'});
    }
    res.status(200).json(user);
}

// Delete a patient.
const deletePatient = async ( req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such patient.'});
    }
    const patient = await Patient.findByIdAndDelete(id);
    if(!patient){
        return res.status(404).json({error:'No such patient.'});
    }

    res.status(200).json(patient);
}

// Update a user.
const updateUser = async ( req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user.'});
    }
    const user = await User.findOneAndUpdate({_id: id}, {...req.body});
    if(!user){
        return res.status(404).json({error:'No such user.'});
    }

    res.status(200).json(user);
}

// Update a patient.
const updatePatient = async ( req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such patient.'});
    }
    const patient = await Patient.findOneAndUpdate({_id: id}, {...req.body});
    if(!patient){
        return res.status(404).json({error:'No such patient.'});
    }

    res.status(200).json(patient);
}


module.exports = {

    // for managers and employees
    createNewUser,
    getAllUsers,
    getSinglelUser,
    deleteUser,
    updateUser,
    getUserByEmail,

    // for patients
    getAllPatients,
    getSinglelPatient,
    createNewPatient,
    deletePatient,
    updatePatient
}