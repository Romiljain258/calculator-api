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
    res.render('add');
});

app.get('/sub', (req, res) => {
    res.render('sub');
});

app.get('/multiply', (req, res) => {
    res.render('multiply');
});

app.get('/div', (req, res) => {
    res.render('div');
});

app.post('/addBack', (req, res) => {
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
app.post('/subBack', (req, res) => {
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
app.post('/multiplyBack', (req, res) => {
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
app.post('/divBack', (req, res) => {
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

// app.get('/:operator/:num1/:num2', function(req,res){

// 	var operator = req.body.operator;
// 	var num1 = parseInt(req.body.num1);
// 	var num2 = parseInt(req.body.num2);
// 	var result;

// 	switch(operator){
// 		case "add":
//         result = add(num1, num2);
//         console.log(result);
// 		break;

// 		case "sub":
// 		result = sub(num1, num2);
// 		break;

// 		case "multiply":
// 		result = multiply(num1, num2);
// 		break;

// 		case "div":
// 		result = div(num1, num2);
// 		break;

// 		default:
// 		result = "Sorry, please enter a valid operator!"
//     }
// });

// function add(num1, num2){
//     return  num1+num2;
// }
app.listen(3000, (req, res) => {
    console.log('server is running');
});
