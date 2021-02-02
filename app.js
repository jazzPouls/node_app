const express = require('express');
// var cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jazz-test:4IUx4Eu9VwtOJo96@cluster0.i6idj.mongodb.net/test?retryWrites=true&w=majority";
const uri = "mongodb+srv://jazz-test:4IUx4Eu9VwtOJo96@cluster0.i6idj.mongodb.net/test?retryWrites=true&w=majority&useUnifiedTopology=true";
const client = new MongoClient(uri, { useNewUrlParser: true });


const app = express();
app.use(express.json())
    .use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send("started mongodbPROJ NDOMEODN")
// });

app.get('/api/users', (req, res) => {
    
    
    client.connect(err => {
        const collection = client.db("test").collection("test");
        collection.find().toArray((error, data) => {
            if (error) {
                throw error;
            }
            res.send(data);
            client.close();
            
        });
        
        
    });

});

app.post('/api/users', (req,res) => {
    client.connect(err => {
        const collection = client.db("test").collection("test");
        collection.insertOne(req.body, (error, result) => {
            if (error) {
                throw error;
            }
            res.send(result.insertedId);
            client.close();
        });
        // client.close();
    });
});

const port = process.env.port || 3000;

// AWS EB port = 8080;
app.listen(port, () => {
    console.log("port used is : " + port);
    console.log("Starting mongodb proj NOEMONED");
});