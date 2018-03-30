'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');
const Task = require('./Task');

const User = db.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING
    }
});

Task.belongsTo(User);
User.hasMany(Task);

module.exports = User;
