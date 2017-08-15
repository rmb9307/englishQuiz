'use strict';
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const db = require('../src/db');
const api = express.Router();
const path = require('path');
const User = require('../src/db/models/user');
// -------------------------


api
  .get('/heartbeat', (req, res) => {
    console.log('heartbeat works');
    res.send({ok: true});
  })
  .get('/users', function(req, res, next) {
    User.findAll({})
      .then((users) => {
        res.json(users);
      })
      .catch(next);
  });
  //.use('/auth', require('./auth'))
  // .use('/items', require('./api/item.router'))
  // .use('/reviews', require('./api/review.router'))
  // .use('/orders', require('./api/order.router'))
  // .use('/users', require('./users'));


// Send along any errors
api.use((err, req, res, next) => {
	console.log("ERROR");
	console.log(err);
  res.status(500).send(err);
});

// No routes matched? 404.

api.use((req, res) => res.status(404).end());

module.exports = api;
