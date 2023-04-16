const User = require('../models/userModel');
const mongoose = require('mongoose');


// Get all users.
const getAllUsers = async ( req,res) =>{
    const users = await User.find({}).sort({name: -1});
    res.status(200).json(users);
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


// Create new user.
const createNewUser = async (req,res) => {
    const {name,id,email,cellphone,dateOfBirth,role,hebrewName,password} = req.body;

    // Add new user to the database.
    try {
        const user = await User.create({name,id,email,cellphone,dateOfBirth,role,hebrewName,password});
        res.status(200).json(user);
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


module.exports = {
    createNewUser,
    getAllUsers,
    getSinglelUser,
    deleteUser,
    updateUser
}