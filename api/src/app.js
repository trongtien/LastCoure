require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app);
const io = socketio(server)

const initRouter = require('./routers/API.js')
const initSockets = require('./socket/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

initRouter(app)
initSockets(io)

server.listen(process.env.port, process.env.hostname, (err) => {
  if (err) throw err
  console.log(`Server online port ${process.env.port} !`)
})
