const Patient = require('../models/patientModel');
const  PatientAttendence = require('../models/attendenceModel');
const mongoose = require('mongoose');

// Get all patients.
const getAllPatients = async ( req,res) =>{
    const today = new Date(); // Get the current date
    today.setHours(0, 0, 0, 0); 
    const patients = await Patient.find({}).sort({name: -1});
    const attendencePatientCounter = await PatientAttendence.find({});
    if(attendencePatientCounter.length === 0){
        for (const patient of patients) {
            const id = patient.id;
            const classRoom = patient.classRoom;
            const hebrewName = patient.hebrewName;
            const image = patient.image;
        try {
                const attendencePatient = await PatientAttendence.create({id,classRoom,hebrewName,image});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
        }
    }

    const retPatients = await PatientAttendence.find({}).sort({name: -1})
    res.status(200).json(retPatients);
}


// Update a patient.
const updatePatientAttendence = async ( req,res) =>{
    const {id,classRoom,hebrewName,arrived,image} = req.body
    const patient = await PatientAttendence.findOneAndUpdate({id: id}, {classRoom,hebrewName,arrived,image},{ new: true });
    if(!patient){
        return res.status(404).json({error:'No such patient.'});
    }
    res.status(200).json(patient);
}


module.exports = {
    // for patients
    getAllPatients,
    updatePatientAttendence
}