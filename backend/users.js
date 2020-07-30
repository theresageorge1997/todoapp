const express = require('express');
const route = express.Router();
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectId } = require('mongodb');

var url='mongodb://localhost:27017/test';
route.post('/register',(req,res) => {
    mongo.connect(url,function(err,client){
        assert.equal(null,err);
        const db = client.db('test');
        db.collection('user').insertOne(req.body,function(err,result){
            assert.equal(null,err);
            console.log('user Inserted');
            client.close();
            return res.json({message: 'registered'});
        });
    });
   /*  users.push(req.body);
    return res.json({message: 'Login Successfull',user: users[users.length-1]}); */
});
route.post('/login',(req,res) => {
    var users = [];
    mongo.connect(url,function(err,client){
        assert.equal(null,err);
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
            });
            client.close();
        })
    });    
});
route.post('/add',(req,res) => {
    mongo.connect(url,function(err,client){
        assert.equal(null,err);
        const db = client.db('test');
        db.collection('todo').insertOne(req.body,function(err,result){
            assert.equal(null,err);
            console.log('Item Inserted');
            client.close();
            return res.json({status: true});
        });
    });
  
});
route.delete('/delete/:id',(req,res) => {
    mongo.connect(url,function(err,client){
        assert.equal(null,err);
        const db = client.db('test');
        db.collection('todo').deleteOne({"_id":ObjectId(req.params.id)},function(err,result){
            assert.equal(null,err);
            console.log('Item deleted');
            client.close();
            return res.json({status: true});
        });
    });
});
route.put('/update',(req,res) =>{
    var item={
        completed: req.body.completed
    };
    var id=req.body._id;

   mongo.connect(url,function(err,client){
        assert.equal(null,err);
        const db = client.db('test');
        db.collection('todo').updateOne({"_id":ObjectId(id)},{$set: item}, function(err,result){
            assert.equal(null,err);
            console.log('Item updated');
            client.close();
            return res.json({status: true});
        });
    });
    });
route.get('/get',(req,res) =>{
    var getdb=[];
    mongo.connect(url,function(err,client){
        assert.equal(null,err);
        const db = client.db('test');
        var cursor = db.collection('todo').find();
        cursor.forEach(function(doc,err){
            assert.equal(null,err);
            getdb.push(doc);
        }, function(){
            client.close();
            return res.json({todo:getdb});
        })
    });
    
});
        
module.exports=route