const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/data',(req,res)=>{
    res.send('More data hereeeee')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})