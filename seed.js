const Promise = require('bluebird');
const db = require('./src/db');
const User = require('./src//db/models/user');
const colors = require('colors');

console.log("db name: ", db.config.database);

const data = {
  users: [
    {
      name: "Liz Lemon",
      email: "nightcheese@blerg.com",
      password: "password1"
    }, {
      name: "Gregor Clegane",
      email: "waffleshirts@chicken.com",
      password: "password2"
    }
  ]
};


module.exports = shouldClose => db.sync({force:true})
  .then(function () {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function (name) {
      console.log("model name: ", name)
      return Promise.map(data[name], function (item) {
        console.log("item: ", item)
        return db.model(name)
        .create(item);
      });
    });
  })
  .then(() => {
    console.log("Finished inserting data");
  })
  .catch((err) => {
    console.error('Error'.red, err, err.stack);
  })
  .finally(() =>  {
    shouldClose && db.close() 
    console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers
});

if (require.main === module) {
  module.exports(true);
}
