const express = require('express');
const router = express.Router();

//유저정보 가져오는 api
router.get('/getuser',(req,res)=>{
    res.status(200).json({message:"fuckyou"});
})

module.exports = router;