'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');


const Task = db.define('tasks', {
    userID: {
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING
    },
    complete: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Task;
