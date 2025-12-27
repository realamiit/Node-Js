const express = require('express');
var morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.set ('view engine', 'ejs')

app.use((req,res, next) =>{
    console.log('This is middlewere')
    return next()
})

app.get('/', (req, res) => {
    res.render('index')

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