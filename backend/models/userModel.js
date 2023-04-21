const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    id:{
        type: Number,
        require: true,
        unique: true 
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    cellphone:{
        type:String,
        require:true
    },
    dateOfBirth:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    hebrewName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

}, {timestamps:true});

// static sign user to the db method
userSchema.statics.signUserToDB = async function(name,id,email,cellphone,dateOfBirth,role,hebrewName,password){
       
    // validations
    if (!email || !password) {
        throw Error('חייב למלא את כל השדות')
    }
    const exists= await this.findOne({email})
    if(exists){
        throw Error('קיים כבר משתמש עם תעודת הזהות')
    }

    // generate hashed password.
    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({name,id,email,cellphone,dateOfBirth,role,hebrewName,password:hash});
    return user
}

// static login method
userSchema.statics.login = async function (email,password){
    // validations
    if(!email||!password){
        throw Error('חייב למלא את כל השדות');
    }
    const user = await this.findOne({email:email})
    if(!user){
        throw Error('אימייל לא נכון');
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('סיסמא לא נכונה');
    }

    return user
}

module.exports = mongoose.model('Users',userSchema);