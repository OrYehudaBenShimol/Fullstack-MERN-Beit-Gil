const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userForLogin = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true 
    },
    password:{
        type:String,
        require:true
    }
}, {timestamps:true});


//Static signup method
userForLogin.statics.signUserToDB = async function(id,password){
    const exists = await this.findOne({id})
    if(exists){
        throw Error('Email Already in use.')
    }

    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({id,password: hash});
    return user
}

module.exports = mongoose.model('UserForLogin',userForLogin);

