const express = require('express')
// const MongoClient = require('mongodb').MongoClient 
// const objectId = require('mongodb').ObjectId //helper function to access '_id' from MongoDB
const mongoose = require('mongoose')
const router = express.Router()

const dbURL = "mongodb://localhost:27017"
const dbName = "nodeAppDB"      // db name
const collectionName = "userTable" // collection name

mongoose.connect(dbURL+'/'+dbName)

const postSchema = new mongoose.Schema({
    name: {type: String, required: true},
    id: Number,
}, {collection: collectionName});

var PostData = mongoose.model('', postSchema)

requestHandler = (req, res) => {
    res.render('form.hbs', {title: 'Form Page', condition: false})
}

router.get('/', requestHandler)

router.get('/submit', async (req, res, next)=>{
    await PostData.find().lean()
    .then((result)=>{
        console.log(result)
        res.render('form.hbs', {condition: true, users: result})
    })
})

router.post('/submit', async (req, res, next)=>{
    var objectToBeInserted = {
        name: req.body.name,
        id: req.body.id
    }

    var item = new PostData(objectToBeInserted)
    await item.save()
    res.render('form.hbs')
})

router.post('/update', async (req, res, next)=>{
    var objectToBeUpdated = {
        name: req.body.name,
        id: req.body.id
    }
    var item = new PostData(objectToBeUpdated)

    await PostData.findOneAndUpdate({'id': objectToBeUpdated.id },{ $set: objectToBeUpdated });
    res.redirect('/form')
})

router.post('/delete', async (req, res, next)=>{
    var id = req.body.id
    await PostData.findByIdAndDelete(id).exec()
    res.redirect('/form')
})

module.exports = {router}


