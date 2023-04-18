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


userSchema.statics.signUserToDB = async function(name,id,email,cellphone,dateOfBirth,role,hebrewName,password){
    try{
        const exists = await this.findOne({id})
        if(exists){
            throw Error('קיים כבר משתמש עם תעודת הזהות')
        }
        if(!validator.isStrongPassword(password)){
            throw Error('סיסמא חלשה, נא לבחור סיסמא חזקה')
        }
        const salt = await bcrypt.genSalt(15);
        const hash = await bcrypt.hash(password,salt);
        const user = await this.create({name,id,email,cellphone,dateOfBirth,role,hebrewName,password:hash});
        return user
    }catch(error){
        throw Error(exists, user)
    }
    

}


//for login
userSchema.statics.login = async function (id,password){
    if(!id||!password){
        throw Error('All fields must be filled.');
    }
    const user = await this.findOne({id})
    if(!user){
        throw Error('Incorrect Email.');
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect Password.');
    }

    return user
}

module.exports = mongoose.model('Users',userSchema);

