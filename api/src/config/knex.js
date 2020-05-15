const enviroment = 'development'
const knexConfig = require('../knexfile')
const enviromentConfig = knexConfig[enviroment]
const knex = require('knex')
const knexDB = knex(enviromentConfig)

module.exports = knexDB


