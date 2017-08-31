'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');


const Task = db.define('tasks', {
    title: {
        type: Sequelize.STRING
    },
    complete: {
        type: Sequelize.BOOLEAN
    },
    password: {
        type: Sequelize.STRING
    },
    completeQuizzes: {
        type: Sequelize.JSON
    }
});

module.exports = Task;
