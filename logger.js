const EventEmitter = require('events');


class Logger extends EventEmitter {

  log(message){
     console.log(message);
     this.emit('listener', {id: 12121 , name:'essssss'})
  }
}
module.exports = Logger;