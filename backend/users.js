const express = require('express');
const route = express.Router();
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectId } = require('mongodb');

var url='mongodb://localhost:27017/test';
const users = [];
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
    mongo.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('todo').insertOne(req.body,function(err,result){
            assert.equal(null,err);
            console.log('Item Inserted');
            db.close();
            return res.json({status: true});
        });
    });
  
});
route.delete('/delete/:id',(req,res) => {
    mongo.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('todo').deleteOne({"_id":ObjectId(req.params.id)},function(err,result){
            assert.equal(null,err);
            console.log('Item deleted');
            db.close();
            return res.json({status: true});
        });
    });
});
route.put('/update',(req,res) =>{
    var item={
        completed: req.body.completed
    };
    var id=req.body._id;

   mongo.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('todo').updateOne({"_id":ObjectId(id)},{$set: item}, function(err,result){
            assert.equal(null,err);
            console.log('Item updated');
            db.close();
            return res.json({status: true});
        });
    });
    });
route.get('/get',(req,res) =>{
    var getdb=[];
    mongo.connect(url,function(err,db){
        assert.equal(null,err);
        var cursor = db.collection('todo').find();
        cursor.forEach(function(doc,err){
            assert.equal(null,err);
            getdb.push(doc);
        }, function(){
            db.close();
            return res.json({todo:getdb});
        })
    });
    
});
        
module.exports=route