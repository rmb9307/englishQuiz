'use strict';
const postgres = require('pg');
const debug = require('debug')('sql');
const chalk = require('chalk');
const Sequelize = require('sequelize');

const name = process.env.DATABASE_NAME || 'easy-ying-wen';
const url = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;

console.log(chalk.yellow(`Opening database connection to ${url}`));

// create the database instance
const db = module.exports = new Sequelize(url, {
  logging: debug 
});

// sync the db, creating it if necessary
const sync = () => {
  db.sync()
    .then(ok => console.log(`Synced models to db ${url}`))
    .catch(fail => {
      if (process.env.NODE_ENV === 'production') {
        console.error(fail);
        return; // Wouldn't do this auto-create in prod
      }
      // Otherwise, do this autocreate nonsense
      console.log(`Creating database ${name}...`);
      require('child_process')
        .exec(`createdb "${name}"`, (err, _ok_) => {
          if (err) {
            return console.error(err);
          }
          sync();
        });
    });
};

db.didSync = sync();
