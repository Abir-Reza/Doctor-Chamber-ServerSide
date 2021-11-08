const express = require('express');
var cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT ||    5000;

// use middlewire
app.use(cors());
app.use(express.json());


const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mflix.feluh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
//   console.log("mongodb connected : ");
  client.close();
});


app.get('/',(req,res) => {
    res.send('Hello from express');
})


app.listen(port, () => {
    console.log("Listening from port : ",port);
})