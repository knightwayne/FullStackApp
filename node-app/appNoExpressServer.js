import http from 'http' // a core module which we export in a variable named - http
import app from './appNoExpress.js'

console.log("Hello"); 

http.createServer(app.handleRequestFunction).listen(8000)
