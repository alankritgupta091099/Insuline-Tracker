const express= require('express');
const router=express.Router();

const Glucose =require('../models/glucose');

//@route    GET api/items
//@desc     GET all items
//@access   PUBLIC
router.get('/',(req,res)=>{
    Glucose.find()
        .then(items=>res.json(items))
});

module.exports=router;