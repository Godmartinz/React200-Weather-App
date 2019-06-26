const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

require('dotenv').config();
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/weather/:searchTarget', (req, res) => {
    console.log(req.params.searchTarget)
    axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${req.params.searchTarget}&APPID=749fa85af0d40fced66bd2bf019da869&units=imperial`,
    }).then(response => {
      console.log('response.data', response.data, '\n')
      res.status(200).send(response.data);
    }).catch(err => {
      console.log('Error,', err.code, 'has occurred');
    })
  });

module.exports = app;
