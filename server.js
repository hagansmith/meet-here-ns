'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 6060
app.set('port', port)
const request = require('request');

// MIDDLEWARE (transform stream)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// https://safe-mesa-30633.herokuapp.com/api/directions/?
app.get('/api/directions/*', (req, res) => {
  let apiCall = req.url.slice('/api/directions/'.length)
  console.log(apiCall);
  let apiReq = `https://maps.googleapis.com/maps/api/directions/json${apiCall}`
  request.get(apiReq, (err, _, body) => {
    res.send(body)
  });
});

// https://safe-mesa-30633.herokuapp.com/api/geocode/?
app.get('/api/geocode/*', (req, res) => {
  let apiCall = req.url.slice('/api/geocode/'.length)
  console.log(apiCall);
  let apiReq = `https://maps.googleapis.com/maps/api/geocode/json${apiCall}`
  request.get(apiReq, (err, _, body) => {
    res.send(body)
  });
});

// https://safe-mesa-30633.herokuapp.com/api/place/details/?
app.get('/api/place/details/*', (req, res) => {
  let apiCall = req.url.slice('/api/place/details/'.length)
  console.log(apiCall);
  let apiReq = `https://maps.googleapis.com/maps/api/place/details/json${apiCall}`
  request.get(apiReq, (err, _, body) => {
    res.send(body)
  });
});

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
)
