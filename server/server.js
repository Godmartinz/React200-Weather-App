const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get("/weather/:city", (res,req)=>{
    axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&APPID=`)
    .then(res=>res.data)
    .catch(err => console.log(err));
})

module.exports = app;
