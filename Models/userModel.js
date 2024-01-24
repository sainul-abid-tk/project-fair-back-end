const mongoos=require('mongoose')
const userSchema=new mongoos.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    },
})
const users= mongoos.model('users',userSchema)
module.exports=users