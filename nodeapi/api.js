var express = require('express');
var app = express();

app.get('/hello', (req, res, next) => {
    res.json({"message" : "Hello 2021"});
});

app.listen(3333, () => {
    console.log("Server up port 5000");
});