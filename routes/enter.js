const express= require('express');
const router=express.Router();

const Glucose =require('../models/glucose');

const glucoseDoc=120;//Prescribed by Doctor
const weight=60;
var insulineReqd=18;//Prescribed by Doctor
var sugarReqd=0;

function glucoseMore(glucoseCurr){
    const tdd=0.55*weight;
    const cf=1700/tdd;
    const x=glucoseCurr-glucoseDoc;
    insulineReqd=insulineReqd+x/cf;

    return insulineReqd;
}
function glucoseLess(glucoseCurr){
    const x=glucoseDoc-glucoseCurr;
    sugarReqd=1.33*x;

    return sugarReqd;
}
//@route    POST /enter
//@desc     create a glucose data
//@access   PUBLIC
router.post('/',(req,res)=>{
    if(req.body.glucoseCurr>glucoseDoc)
        {
            glucoseMore(req.body.glucoseCurr);
            sugarReqd="";
            //res.redirect('/result');
        }
    else
        {
            glucoseLess(req.body.glucoseCurr);
            insulineReqd="";
            //res.redirect('/result');
        }
    const newGlucose=new  Glucose({
        glucoseCurr:req.body.glucoseCurr,
        weight:weight,
        insulineReqd:insulineReqd,
        sugarReqd:sugarReqd
    });
    newGlucose
            .save()
            .then(glucose=>{res.json(glucose)})
            .catch(err=>{console.log(err)});
})


module.exports=router;