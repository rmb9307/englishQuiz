'use strict';

const router = require('express').Router();
const User = require('../db/models/user');

router.post('/', function(req,res,next){
  console.log('REQ.BODY: ', req.body);
  User.create({ email: req.body.email, password: req.body.password})
    .then(function(user){
      res.send(user.data);
    })
    .catch(next);
});


module.exports = router;
