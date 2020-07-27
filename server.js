const express = require('express');
const http = require('http');
const bodyParser =require('body-parser');

const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))
const UserRoutes = require('./backend/users')


/* app.get('/',(req,res)=>{
    res.json({message: 'Hello'})
});

app.post('/', (req, res)=>{
    res.json({message: `hello ${req.body.name}`});
});
 */
app.use(express.static(__dirname + '/dist/auth-todo'));
app.get('/',(req,res)=>{
    res.sendfile('./dist/auth-todo/index.html')
});
app.use('/todo',UserRoutes);

const server = http.createServer(app);
server.listen(4000, ()=>{
    console.log('server started');
})