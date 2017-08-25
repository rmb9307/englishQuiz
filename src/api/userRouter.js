'use strict';

const router = require('express').Router();
const User = require('../db/models/user');

router.post('/', function(req,res,next){
  User.create({ email: req.body.email, password: req.body.password})
    .then(function(user){
      res.json(user);
    })
    .catch(next);
});


module.exports = router;
