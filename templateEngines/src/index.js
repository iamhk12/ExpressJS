const express = require("express");
const fs = require("fs")
const path = require("path")
const app = express();
let port = 3000;

const staticPath = path.join(__dirname, '../public');
const tempPath = path.join(__dirname,"../templates")
// console.log(staticPath)

// Example: app.get(route, callback)

// API:
// get - READ
// post - CREATE
// put - UPDATE
// delete - DELETE

app.use(express.static(staticPath));  //built-in middleware

app.set('view engine', 'hbs')
app.set('views',tempPath)
//template engine route
app.get('/', (req, res) => {
    res.render('index', {
        Name : "HK"
    });
})

app.get("/", (req, res) => {
    res.send("Hello World!! from express");
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log("Listening at port :", port)
})