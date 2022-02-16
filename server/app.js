const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const port = process.env.PORT;

mongoose
  .connect(process.env.URL, {
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/',(req,res)=>res.send('hello world'))

app.listen(port, ()=>console.log(`${port}번 포트에서 돌아가는중`))