const express = require('express');
const logger = require('./middelware/logger')
const app =express();
const members = require('./members')


const port = 5000;

//app middelware logger.js
app.use(logger)

//static files
app.use(express.static(__dirname+ '/public'))

//get members
app.get('/api/members',(req,res)=>{
    res.json(members)
})

//get one member 
app.get('/api/members/:id',(req,res)=>{
    res.json(members.filter(member=>member.id === parseInt(req.params.id)))
})

app.listen(port,(err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${port}`)
})