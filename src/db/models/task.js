'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');


const Task = db.define('tasks', {
    userId: {
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.INTEGER
    },
    outOf: {
        type: Sequelize.INTEGER
    }
});

module.exports = Task;
