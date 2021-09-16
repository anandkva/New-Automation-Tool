const express = require('express');
const app = express();
const port = 3005;
var path = require("path");

const appRouter = require('./router/app.router')


app.set("view engine", "ejs");
app.use('/', appRouter)


app.get('/', (req, res)=>{
    res.render("home")
})



app.listen(port, (err)=>{
    if(!err){
        console.log(`Port Connected ${port}`)
    }else {
        console.log('Error -->', err)
    }
})