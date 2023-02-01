const express = require('express');
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const { copyFileSync } = require('fs');
const port=process.env.PORT || 5000
require('dotenv').config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fpvwzmp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)

async function run(){
    try{
        console.log('Hi leadzen')

        
    }
    finally{

    }
}
run().catch(console.log)
app.get('/', async (req, res) => {
    res.send('leadzen server is running')
})
app.listen(port, () => console.log(`leadzen server is running on ${port}`))
