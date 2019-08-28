/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

const env = require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log('connection successful');