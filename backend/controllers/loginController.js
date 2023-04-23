const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// create a new token for 12h and return it.
const createToken =(_id) =>{
   return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'12h'})
   
}

// login user
const loginUser = async (req,res) => {
    const{email,password} = req.body
    try {
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// Exporting the function "loginUser" so it can be a global function.
module.exports ={
    loginUser
}