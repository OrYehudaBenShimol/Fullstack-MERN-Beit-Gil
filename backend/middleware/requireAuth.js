const jwt=require('jsonwebtoken')
const User = require('../models/userModel')


// middleware to verify if the user is authenticated.
const requireAuth = async (req,res,next) => {

    // verify user is authenticated
    const {authorization} =  req.headers
    if(!authorization){
        return res.status(401).json({error:'Authorization token is required.'})
    }

    // the token is in the next pattern 'Bearer sdfsdfsdfsdfsdf.sdfsdfsdfsdrwerwr.ryrt435345gegdf' we need only the token.
    const token = authorization.split(' ')[1]
    try {
        const {_id} = jwt.verify(token,process.env.SECRET)
        req.user = await User.findOne({_id:_id}).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error:'Request is not authorized'})
    }
}

module.exports = requireAuth