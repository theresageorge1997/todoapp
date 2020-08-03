const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');


const userRouter = require('./backend/controllers/userController');
const todoRouter = require('./backend/controllers/todoController');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}));

const server = http.createServer(app);
server.listen(4000, () => {
    console.log('server started');
});

app.use(express.static(__dirname + '/dist/auth-todo'));
app.get('/',(req,res)=>{
    res.sendfile('./dist/auth-todo/index.html')
});

app.use('/user', userRouter);
app.use('/todo', todoRouter);