'use strict';
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const db = require('../db');
const api = module.exports = express.Router();
const path = require('path');

api
  .use('/user', require('./userRouter'));

// Console log errors
api.use((err, req, res, next) => {
	console.log("ERROR");
	console.log(err);
  res.status(500).send(err);
});

// Send 404 if no matching routes
api.use((req, res) => res.status(404).end());
