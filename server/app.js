const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const expressSession = require('express-session');
const helmet = require('helmet');
const port = process.env.PORT;
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const morgan = require('morgan');
mongoose
  .connect(process.env.URL, {
  })
  .then(() => {
    console.log("몽고디비 연결됨");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(expressSession({
  saveUninitialized:true,
  HttpOnly:true,
  resave:true,
  secret: process.env.SECRET,
  cookie:{maxAge:1000*60*30}//세션 지속시간 30분
}));

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.get('/',(req,res)=>res.send('hello world'))

app.listen(port, ()=>console.log(`${port}번 포트에서 돌아가는중`))