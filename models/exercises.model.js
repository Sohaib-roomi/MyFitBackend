const mongoose = require('mongoose');

const exerSchema = mongoose.Schema({
    exerName:{
        type:String,
        required:true,
        minlength:3,

    },
    desc:{
        type:String, 
        required:true,
        minlength:3,
    }
    

})
 