const express = require('express');
const router = express.Router();
const assert = require('assert');
const mongodb = require('../db');

router.post('/register', (req, res) => {
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        db.collection('user').insertOne(req.body, (error, response) => {
           console.log(response.insertedId);
            assert.equal(null,error);
            console.log('User Inserted');
            client.close();
            res.json({message: 'registered'}); 
        });
    });
});

router.post('/login', (req, res) => {
    const users = [];
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        var cursor = db.collection('user').find();
        cursor.forEach(function(doc,err){
            assert.equal(null,err);
            users.push(doc);
        }, function(){
            users.forEach(user =>{
                if((user.email===req.body.email)&&(user.password===req.body.password))
                {
                    return res.json({message: 'Login Successfull'});
                }
                else
                {
                    return res.status(401).json({error: 'Invalid Credentials'}); 
                }
            });
            client.close();
        })
});
});

module.exports = router;