const MorningMeetingPatient = require('../models/morningMeetingModel');
const Patient = require('../models/patientModel')
const mongoose = require('mongoose');


// Get a single patient.
const getSinglelPatient = async ( req,res) =>{
    const {id} = req.params;
    const patient = await MorningMeetingPatient.findOne({id:id});
    if(!patient){
        return res.status(404).json({error:'No such user.'});
    }
    res.status(200).json(patient);
}


// Get all patients.
const getAllPatients = async ( req,res) =>{
    const today = new Date(); // Get the current date
    today.setHours(0, 0, 0, 0); 
    const patients = await Patient.find({}).sort({name: -1});
    for (const patient of patients) {
        const id = patient.id;
        const classRoom = patient.classRoom;
        const hebrewName = patient.hebrewName;
        try {
            const existingRecord = await MorningMeetingPatient.findOne({ createdAt: { $gte: today }, id:patient.id });
            if(!existingRecord){
                const attendencePatient = await MorningMeetingPatient.create({id,classRoom,hebrewName,});
            }
        } catch (error) {
            return res.status(400).json({error: error.message});
             
        }
    }

    const retPatients = await MorningMeetingPatient.find({}).sort({name: -1})
        res.status(200).json(retPatients);
    
}


// // Create new patient.
// const createNewPatient = async (req,res) => {
//     const {id,classRoom,hebrewName,feeling,arrived} = req.body;
//     // Add new user to the database.
//     try {
//         const patient = await MorningMeetingPatient.MorningMeetingPatient({id,classRoom,hebrewName,feeling,arrived});
//         res.status(200).json(patient);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// }


// Update a patient.
const updatePatient = async ( req,res) =>{
    const {id,classRoom, hebrewName,arrived,feeling} = req.body
    const patient = await MorningMeetingPatient.findOneAndUpdate({id:id}, {classRoom, hebrewName,arrived,feeling},{ new: true });
    if(!patient){
        return res.status(404).json({error:'No such patient.'});
    }
    res.status(200).json(patient);
}


module.exports = {
    getSinglelPatient,
    getAllPatients,
    updatePatient
}