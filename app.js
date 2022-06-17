const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.use([
    // morgan = morgan('dev'),
    url = express.urlencoded({extended: true}),
    express = express.json()
])

app.get('/', (req, res) => {
    res.json ({
        massage: 'Hello World'
    })
})

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    app.listen(8000, () => {
        console.log(" server is running port 8000")
    }) 
})
.catch(e, () => {
    console.log(e)
})

