const express = require('express')
const router = express.Router()

requestHandler = (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.write('Using express app!')
    // res.end()
    res.render('index.hbs', {title: 'Index Page', name: 'Alice Bob'})
}

router.get('/', requestHandler)

router.get('/react', (req, res, next)=>{
    res.send("Hello Text from Local Node Server")
})

router.post('/react', (req, res, next)=>{
    // console.log(req.body.numVar)
    // let x = parseInt(req.body.numVar)
    console.log(req.body)
    let x = parseInt(req.body)
    console.log(x)
    res.send((x*x).toString())
})

router.get('/test/:id', (req, res, next)=>{
    res.render('test.hbs', {idValue: req.params.id})
})

router.post('/test/submit', (req, res, next)=>{
    let id = req.body.idName
    res.redirect('/test/'+id)
})

module.exports = {router}


