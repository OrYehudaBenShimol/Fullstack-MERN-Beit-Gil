const User = require('../models/userModel');

const mongoose = require('mongoose');


// Get a single user.
const getSinglelUser = async ( req,res) =>{
    const {email} = req.params;

    const user = await User.findOne({email:email});
    if(!user){
        return res.status(404).json({error:'No such user.'});
    }
    res.status(200).json(user);
}




module.exports = {

    getSinglelUser
}