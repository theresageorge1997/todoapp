const mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

function connect(){

const p = new Promise((resolve, reject) => {

    mongodb.connect(url, { useUnifiedTopology: true }, (err,client) => {
        if(!err)
        {
            console.log('MongoDB connection succeeded');
            resolve(client);
        }
        else
            console.log('Error in DB connection :' + JSON.stringify(err, undefined, 2));
    });
    
});
return p;

}


module.exports = {
    connect
};