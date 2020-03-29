const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle
* NoSQL: MongoDB, CouchDB
*
* Formas de configurar:
* 
* Driver: SELECT * FROM users
* Query Buider: table('users').select('*').where() (KNEX)
*/ 

app.listen(3333);