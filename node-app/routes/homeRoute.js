const express = require('express')
const router = express.Router()

requestHandler = (req, response) => {
    // response.writeHead(200, {"Content-Type": "text/html"})
    // fs.readFile('./home.html', null, (error, data)=>{
    //     response.write(data)
    //     response.end()
    // })
    response.render('home.hbs', {title: 'Home Page', arr: [16,4,9,81], bool: false})
}

router.get('/', requestHandler)
module.exports = {router}