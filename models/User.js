const { Schema, Mongoose, default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const UseSchema= new Schema({

  first_name:{
    type: String,
  },
  last_name:{
    type: String,
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type:Date,
    default: Date.now
  }
})
module.exports = User = Mongoose.model ('user' , UserSchema);