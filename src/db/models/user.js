'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');
const bcrypt = require('bcrypt');
const colors = require('colors');


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
    },
    completeQuizzes: {
        type: Sequelize.JSON
    }
});

module.exports = User;
