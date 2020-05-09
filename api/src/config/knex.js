const knex = require('knex')
const knexConfig = require('../knexfile')
const dbENV = process.env.DB_ENV || development
const knexDB = knex(knexConfig(dbENV))

module.exports = knexDB


