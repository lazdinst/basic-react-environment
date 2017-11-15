const path = require('path');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  let url = ''
  const preloadedState = {};
  preloadedState.app = {};
  axios.get(url)
    .then(results => {
      //Add desired props to preloadedState
      preloadedState.app.injectedState = true;
      res.render('index', {preloadedState});
    })
    .catch((err) => {
      preloadedState.app.injectedState = false;
      res.render('index', {preloadedState});
    });
});

module.exports = app;