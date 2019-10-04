const EventEmmiter = require('events')
const uuid = require('uuid')

class Logger extends EventEmmiter {
  log(msg) {
    // call event
    this.emit('massage', { id: uuid.v3(), msg })
  }
}

module.exports = Logger
