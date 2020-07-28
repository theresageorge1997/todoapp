const express = require('express');
const route = express.Router();
var uniqid = require('uniqid');
const users = [];
const todos=[];
route.post('/register',(req,res) => {
    users.push(req.body);
    return res.json({message: 'Login Successfull',user: users[users.length-1]});
});
route.post('/login',(req,res) => {
    users.forEach(element =>{
        if((element.email===req.body.email)&&(element.password===req.body.password))
        {
            return res.json({message: 'Login Successfull',user:element});
        }
        else{
            return res.status(401).json({error:{message: 'Invalid Credentials'}});
        }
    });
    
});
route.post('/add',(req,res) => {
    req.body.id=uniqid();
    todos.push(req.body);
    return res.json({todo: todos});
});
route.delete('/delete/:id',(req,res) => {
    const i=req.params.id;
    todos.splice(i,1);
        return res.json({todo:todos});
    });
route.put('/update/:id',(req,res) =>{
    const i = req.params.id;
    todos[i]=req.body;
    return res.json({todo:todos});
    });
route.get('/get',(req,res) =>{
    return res.json({todo:todos});
});
        
module.exports=route