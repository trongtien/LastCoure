const express = require('express')
const router = express.Router();
const { auth } = require('../controllers/index')
let initRouter = (app) => {
  router.post('/api/admin/login', auth.login)

  return app.use('/', router)
}
module.exports = initRouter