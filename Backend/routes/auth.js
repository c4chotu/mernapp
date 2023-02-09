
const express=require('express');
const { body, validationResult } = require('express-validator');
const User =require('../models/User');
const router=express.Router();
router.post('/',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid password').isLength({min:5})],
    (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
         res.status(400).json({errors:errors.array()});
         return;
    } 
    User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
        res.status(500).json({error:'please enter a unique value for email',message:err.message})})
    
    
    

})
module.exports=router