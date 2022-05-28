const mongoose= require("mongoose")
const bcrypt=require("bcryptjs")
// definition de schema
const userSchema= mongoose.Schema(
  {
    name:{
      type:String , required:true

    },
    email:{
      type:String ,required:true

    },
    password:{
      type:String, required:true

    }},
    {timestamps:true})

    //changer usershema en un model
module.exports=mongoose.model("User",userSchema)
