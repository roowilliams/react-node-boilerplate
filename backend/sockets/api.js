var socketio = require('socket.io')
var io = socketio()

class socketApi {
  constructor() {
    this.io = io
    this.initListeners()
  }

  initListeners() {
    this.io.on('connection', socket => {
      console.log('A user connected')
      this.sendEvent('message', { msg: 'hello' })
    })
  }

  sendEvent(type, data) {
    this.io.sockets.emit(type, data)
  }
}

const instance = new socketApi()
module.exports = instance
