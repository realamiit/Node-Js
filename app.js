const express = require("express");
var morgan = require('morgan')
const app = express();

app.use(morgan('dev'))

app.set("view engine", "ejs");

// this is third middelwire name is Built in middlewiere
app.use(express.json)
app.use(express.urlencoded)


app.get("/", (req, res) => {
  res.render("index");
});

app.get('/about', (req, res) => {
    res.send('I am about page also')

})

app.get('/home', (req, res) => {
    res.send('I am here at the home page !!!!')

})

app.get('/profile', (req, res) => {
    res.send('I am Amit Gupta ,im persuing BCA FROM DR ghanshyam singh colleg of aducation Varansi  !!')

})

app.get('/papaya', (req, res) => {
    res.send('papaya is a fruits')

})

app.post('/get-from-data', (req,res) =>{  //get method basicly use for frontend to data backend tk carry krwana
    console.log(req,body)
    res.send('data recived')
})


app.listen(3000)