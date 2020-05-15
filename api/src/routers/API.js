const express = require('express')
const router = express.Router();
const { auth } = require('../controllers/index')
let initRouter = (app) => {
  router.post('/api/auth/register', auth.register)
  router.post('/api/auth/login', auth.login)

  return app.use('/', router)
}
module.exports = initRouter