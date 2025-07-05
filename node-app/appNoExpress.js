//exported to appNoExpressServer.js
var http = require('http') 
var fs = require('fs')

console.log("Hello"); //logs in terminal, not the browser console

function routerFunction1(path, response){
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile(path, null, (error, data)=>{
        response.write(data)
        response.end()
    })
}

function routerFunction2(response){
    response.writeHead(200, {"Content-Type": "text/plain"})
    console.log('Text')
    response.write("Text through Node")
    response.end()
}

function routerFunction3(response){
    response.writeHead(200, {"Content-Type": "application/json"})
    console.log('JSON')
    response.write(JSON.stringify({
        key: "nvalue",
        key2: ["obj1", "obj2", "obj3"],
        key3: "lvalue",
        key4: "rvalue",
        key5: {k1: "xy", k2: "yz"}
    }))
    response.end()
}

onRequest = (request, response)=>{
    console.log("Hello1");
    var path = request.url
    // console.log(request)
    // console.log(path)

    switch(path)
    {
        case '/': 
            routerFunction1("./static/index.html", response)
        break
        case '/home': 
            routerFunction1("./static/home.html", response) 
        break
        case '/text': 
            routerFunction2(response)
        break
        case '/json': 
            routerFunction3(response)
        break
        default: 
            response.writeHead(404, 'text/plain')
            response.write("404 error, address not found")
            response.end()
    }
}


module.exports = {
    handleRequestFunction: onRequest
}

http.createServer(onRequest).listen(8000)
