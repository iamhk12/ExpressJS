const express = require("express");
const fs = require("fs")
const path = require("path")
const app = express();
let port = 3000;
// let quotepage = fs.readFileSync("misctimepass.html","utf-8")

// console.log(`${__dirname}`)

const staticPath = path.join(__dirname, '../public');

// Example: app.get(route, callback)

// API:
// get - READ
// post - CREATE
// put - UPDATE
// delete - DELETE
// app.use(express.static(staticPath));  //built-in middleware

// app.get("/", (req, res) => {
//     app.use(express.static(staticPath));
//     // res.send("Hello World!! from express");
// })

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/login.html'));
});

app.get("/about", (req, res) => {
    res.send("Hello from about Page")
})

app.get("/p_quote", (req, res) => {
    res.write(quotepage);
})

app.listen(port, () => {
    console.log("Listening at port :", port)
})