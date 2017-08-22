const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/easyYingWen';

const client = new pg.Client(connectionString);
client.connect();
console.log('in db, after connect');
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });