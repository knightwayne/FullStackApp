const express = require('express')
const MongoClient = require('mongodb').MongoClient 
const objectId = require('mongodb').ObjectId //helper function to access '_id' from MongoDB
const router = express.Router()

const dbURL = "mongodb://localhost:27017"
const dbName = "nodeAppDB"      // db name
const collectionName = "userTable" // collection name

requestHandler = (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.write('Using express app!')
    // res.end()
    res.render('form.hbs', {title: 'Form Page', condition: false})
}
router.get('/', requestHandler)

router.get('/submit', async (req, res, next)=>{
    const client = new MongoClient(dbURL)
    await client.connect()

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const result = await collection.find().toArray()
    console.log('Item Fetched', result)

   res.render('form.hbs', {condition: true, users: result})

    await client.close();
    console.log("Connection closed");
})

router.post('/submit', async (req, res, next)=>{
    var objectToBeInserted = {
        name: req.body.name,
        id: req.body.id
    }
    console.log(objectToBeInserted)

    const client = new MongoClient(dbURL)
    await client.connect()

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const result = await collection.insertOne(objectToBeInserted)
    console.log('Item Inserted', result.insertedId)

    // res.redirect('/form')
    res.render('form.hbs')

    await client.close();
    console.log("Connection closed");
})

router.post('/update', async (req, res, next)=>{
    var objectToBeUpdated = {
        name: req.body.name,
        id: req.body.id
    }

    console.log(objectToBeUpdated)
    const client = new MongoClient(dbURL)
    await client.connect()

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const result = await collection.updateOne({'id': objectToBeUpdated.id },{ $set: objectToBeUpdated });
    console.log('Item Updated', result)

    // res.redirect('/form')
    res.render('form.hbs')

    await client.close();
    console.log("Connection closed");
})

router.post('/delete', async (req, res, next)=>{

    var id  = req.body.id
    console.log(id)

    const client = new MongoClient(dbURL)
    await client.connect()

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const result = await collection.deleteOne({'_id': new objectId(id)})
    console.log('Item Deleted', result)

    // res.redirect('/form')
    res.render('form.hbs')

    await client.close();
    console.log("Connection closed");
})

module.exports = {router}


