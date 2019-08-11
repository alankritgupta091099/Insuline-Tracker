const mongoose=require('mongoose');

const GlucoseSchema=new mongoose.Schema({
    glucoseCurr:{
        type:String,
        required:true
    },
    glucoseDoc:{
        type:String,
        default:"200"
    },
    insulineReqd:{
        type:String,
        default:""
    },
    sugarReqd:{
        type:String,
        default:""
    },
    weight:{
        type:String,
        default:"72"
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Glucose',GlucoseSchema); 