const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const handlebars = require("express-handlebars").create({ defaultLayout: "main" });
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

app.get('/add', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/sub', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/multiply', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/div', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/add', (req, res) => {
    let val1 = req.body.val1;
    let val2 = req.body.val2;
    let total = (val1 - 0) + (val2 - 0);
    if (val1 > 1000000 || val2 > 1000000) {
        res.send('failure' + '<br>' + 'Overflow');
    }
    else {
        res.send('success' + "<br>" + "the sum of given two number is: " + total);
    };
});
app.post('/sub', (req, res) => {
    let val1 = req.body.val1;
    let val2 = req.body.val2;
    let total = (val1 - 0) - (val2 - 0);
    if (val1 > 1000000 || val2 > 1000000) {
        res.send('failure' + '<br>' + 'Overflow');
    }
    else {
        res.send('success' + "<br>" + "the sum of given two number is: " + total);
    };
});
app.post('/multiply', (req, res) => {
    let val1 = req.body.val1;
    let val2 = req.body.val2;
    let total = (val1 - 0) * (val2 - 0);
    if (val1 > 1000000 || val2 > 1000000) {
        res.send('failure' + '<br>' + 'Overflow');
    }
    else {
        res.send('success' + "<br>" + "the sum of given two number is: " + total);
    };
});
app.post('/div', (req, res) => {
    let val1 = req.body.val1;
    let val2 = req.body.val2;
    let total = (val1 - 0) / (val2 - 0);
    if (val1 > 1000000 || val2 > 1000000) {
        res.send('failure' + '<br>' + 'Overflow');
    }
    else if(val2==0){
               res.send('Cannot divide by zero');
    }
    else {
        res.send('success' + "<br>" + "the sum of given two number is: " + total);
    };
});

app.listen(3000, (req, res) => {
    console.log('server is running');
});
