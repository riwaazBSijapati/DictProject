const express = require('express');
const app = express();
const mysql = require('mysql');
const config = require('./sqlConfig');
connectDb = mysql.createConnection(config);

app.use(express.static(__dirname+'/public'));

app.listen(3000, function () {
    console.log("Server running in 3000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/dict.html");
})

app.get("/dict.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/dict.css");
})

app.get("/jQuery.js", (req, res) => {
    res.sendFile(__dirname + "/jQuery.js");
})

app.get("/dict.js", (req, res) => {
    res.sendFile(__dirname + "/dict.js");
})

app.get('/search-word', function (req, res) {
    const searchWord = req.query.searchWord;
    let sql = `SELECT * FROM entries.entries Where word = '${searchWord}'`;
    connectDb.query(sql, function (err, data) {
        if (err) throw err;
        console.log(data);
        res.json({
            status: 200,
            data: data
        })
    })
});