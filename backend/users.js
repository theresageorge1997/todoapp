const express = require('express');
const route = express.Router();
const users = [];
route.post('/register',(req,res) => {
    users.push(req.body);
    return res.json({message: 'Login Successfull',user: users[users.length-1]});
})
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
module.exports=route