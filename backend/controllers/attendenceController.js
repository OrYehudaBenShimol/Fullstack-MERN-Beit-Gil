const Patient = require('../models/patientModel');
const  PatientAttendence = require('../models/attendenceModel');

const mongoose = require('mongoose');

// Get all patients.
const getAllPatients = async ( req,res) =>{
    const patients = await Patient.find({}).sort({name: -1});
    for (const patient of patients) {
        const id = patient.id;
        const classRoom = patient.classRoom;
        const hebrewName = patient.hebrewName;
    try {
        const attendencePatient = await PatientAttendence.create({id,classRoom,hebrewName});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    }

    const retPatients = await PatientAttendence.find({}).sort({name: -1})
    res.status(200).json(retPatients);
}


// Update a patient.
const updatePatientAttendence = async ( req,res) =>{
    const {id} = req.body
    const patient = await PatientAttendence.findOneAndUpdate({id: id}, {...req.body});
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