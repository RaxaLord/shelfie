require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

app.use(express.json());

const controller = require('./controller');

const { CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  console.log('connected to db');
  app.set('db', db);
});

const port = 3001;

app.listen(port, () => console.log(`The server is listening on port: ${port}`));
