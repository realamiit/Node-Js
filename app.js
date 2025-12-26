const express = require('express');
const app = express()

app.set ('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Amit Gupta here  i m enable to force u to do your best')

})

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
app.listen(3000)