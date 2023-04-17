const Login = require('../models/userForLoginModel')


// login user
const loginUser = async (req,res) => {
    // const {id,password} = req.body;
    // try {
    //     const user = await Login.signUserToDB(id,password)
    //     res.status(200).json({id,user});
    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }
}


module.exports ={
    loginUser
}