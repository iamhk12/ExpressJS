// www.hk.com - Welcome to HomePage
// /about - Welcome to AboutPage
// /contact - Welcome to ContactPage
// /temp - Welcome to Temp page



const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

let quotepage = fs.readFileSync("misctimepass.html", "utf-8");

app.get("/", (req, res) => {
    res.status(200).send("<h1 style='color:wheat;'>Welcome to My Home Page</h1>");
});
app.get("/about", (req, res) => {
    res.status(200).send("Welcome to My About Page");
});
app.get("/contact", (req, res) => {
    res.status(200).send("Welcome to My Contact Page");
});
// app.get("/temp", (req, res) => {
//     res.status(200).send(
//         [
//             {
//                 id: 1,
//                 name: "HK"
//             }
//             ,
//             {
//                 "main":
//                 {
//                     weather: "Smoke"
//                 }
//             }
//         ]
//     );
// });
app.get("/temp", (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: "HK"
            }
            ,
            {
                "main":
                {
                    weather: "Smoke"
                }
            }
        ]
    );
});

app.get("/p_quote", (req, res) => {
    res.write(quotepage);
})


//Setting listening port
app.listen(port, () => {
    console.log("Listening at port no.:", port);
})

