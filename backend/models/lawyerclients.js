
const mongoose = require('mongoose');
const lawyerclientSchema = new mongoose.Schema({
    lawyer:{
         type:mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "Lawyer"
    },
    client:{
         type: mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    caseType:{
        type:String,
        require:true
    },
    
    date:{
        type:Date,
        require:true
    },
    status:{
        type:String,
        require:true,
        enum: ["Active", "Closed", "Pending"],
        default: "Pending"
    }
    

  },
{timestamps:true});


  const Lawyerclients = mongoose.model('Lawyerclients', lawyerclientSchema);

  module.exports=Lawyerclients;
