require('./models/db');
const express=require('express');
const bodyParser=require('body-parser');
const enter=require('./routes/enter');
const result=require('./routes/result');
const cors=require('cors');

const app=express();

//body parser middleware
app.use(bodyParser.json());
app.use(cors());
//routes
app.use('/enter',enter);
app.use('/result',result);
//server
const port=process.env.PORT || 3003;

app.listen(port,()=>{
    console.log("server listening to port "+port);
})