const chatText = require('./chat/chatText')

let initSockets = (io) => {
  chatText(io)
}
module.exports = initSockets