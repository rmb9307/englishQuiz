'use strict';

const router = require('express').Router();
const Task = require('../db/models/task');

router.post('/', function(req,res,next){
  Task.create({ userId: req.body.userId, title: req.body.task, score: req.body.score, outOf: req.body.outOf })
    .then(function(task){
        res.send(task.dataValues);
    })
    .catch(next);
});

router.get('/:userId', function(req,res,next){
  Task.findAll({ 
    where: {
      userId: req.params.userId 
    }})
    .then((result)=>{
      const task = result[0].dataValues;
      res.send(task);
    })
    .catch(next);
});


module.exports = router;
