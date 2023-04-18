const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require('../models/userModel')


const createToken =(_id) =>{
   return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'1d'})
}
// login user
const loginUser = async (req,res) => {
    const{id,password} = req.body
    try {
        const user = await User.login(id,password)
        const token = createToken(user._id)
        res.status(200).json({id,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}


module.exports ={
    loginUser
}