const express = require('express');
const passport = 'uRq1S3qFVt2d2aCF';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://organicUser:uRq1S3qFVt2d2aCF@cluster0.73puo.mongodb.net/organicdb?retryWrites=true&w=majority";

const app = express();

app.get('/', (req, res) => {
    res.send('hello i am working')
})


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  console.log('Connected to database successful');
  client.close();
});

app.listen(3000);