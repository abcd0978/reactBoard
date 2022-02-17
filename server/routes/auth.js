const express = require('express');
const router = express.Router();

//로그인
router.post('/login',(req,res)=>{
    const data = req.body;
    res.status(200).json({message:data});
})
//회원가입
router.post('/register',(req,res)=>{
    const {name, email, password, image} = req.body;
    
    console.log(name);
    res.status(200).json({message:data});
})

module.exports = router;