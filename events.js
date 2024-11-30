
 const Logger = require('./logger');
 const eventing = new Logger();
 eventing.on('listener', (args) => {
     console.log('listener', args);
 });
 eventing.log('gamed neeek');