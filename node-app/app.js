const fs = require('fs')
const express = require('express')
const hbs = require('express-handlebars')
const cors = require('cors');
const indexRouter = require("./routes/indexRoute.js")
const homeRouter = require("./routes/homeRoute.js")
// const formRouter = require("./routes/formRoute.js")
const formRouter = require("./routes/formRouteMongoose.js")

const port = 8000
const app = express();
app.use(cors());

app.engine('hbs', hbs.engine({extname: 'hbs', defaultLayout: 'default', layoutsDir: './views/layout/'}))
app.set('views', 'views') //change using dirname, why??
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON
app.use(express.text())

// app.use('/', indexRouter.requestHandler)
// app.use('/home', homeRouter.requestHandler)

app.use('/', indexRouter.router)
app.use('/home', homeRouter.router)
app.use('/form', formRouter.router)
app.all('/{*any}', (req, res, next)=>{
    res.status(404).render('error.hbs')
})


app.listen(port, ()=>{
    console.log(`Server running on Port ${port}`)
})