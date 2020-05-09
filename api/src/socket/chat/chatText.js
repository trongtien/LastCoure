let chatText = (io) => {
  io.on('connection', (socket) => {
    console.log('connect')
  })
}
module.exports = chatText