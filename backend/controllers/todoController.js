const express = require('express');
const router = express.Router();
const assert = require('assert');
const mongodb = require('../db');
const { ObjectId } = require('mongodb');
const multer = require('multer');

router.post('/listadd', (req, res) => {
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        db.collection('todos').insertOne(req.body, (error, response) => {
            assert.equal(null,error);
            console.log('List Inserted');
            client.close();
            res.json({insertedId: response.insertedId}); 
        });
    });
});

router.get('/getlists', (req, res) => {
    mongodb.connect().then((client)=>{
        var lists = [];
        const db = client.db('test');
        var cursor = db.collection('todos').find();
        cursor.forEach(function(doc,err){
            assert.equal(null,err);
            lists.push(doc);
        }, function(){
            client.close();
            console.log('Lists retrieved')
            res.json({lists: lists});
        })
    });    
});
router.post('/add/:id', (req, res) => {
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        db.collection('todos').updateOne({ _id: ObjectId(req.params.id)},
        { $push: {  "list": req.body } }, (error, response) => {
            assert.equal(null,error);
            console.log('Todo Inserted');
            client.close();
            res.json({status: true}); 
        });
    });
});

router.get('/get/:id', (req, res) => {
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        db.collection('todos').findOne({ _id: ObjectId(req.params.id)},(error,response)=>{
            assert.equal(null,error);
            console.log('Todos retrieved');
            client.close();
            res.json({todo: response.list}); 
        });
    });
});

router.put('/delete/:id',(req,res) => {
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        db.collection('todos').updateOne({"_id":ObjectId(req.params.id)},{$pull : {"list": req.body}},(error,result)=>{
            assert.equal(null,error);
            console.log('Todo deleted');
            client.close();
            return res.json({status: true});
        });
    });
});

router.put('/update/:id',(req,res) => {
    mongodb.connect().then((client)=>{
        const db = client.db('test');
        db.collection('todos').updateOne({"_id":ObjectId(req.params.id)},{$set : {"list.$[index].completed": req.body.completed},},{ arrayFilters: [ {"index.newTodo": req.body.newTodo} ] },(error,result)=>{
            assert.equal(null,error);
            console.log('Todo updated');
            client.close();
            return res.json({status: true});
        });
    });
});

let upload = multer({ dest: 'uploads/' })
router.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })

module.exports = router;