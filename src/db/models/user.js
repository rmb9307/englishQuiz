'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

const User = db.define('users', {
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

export default User;
