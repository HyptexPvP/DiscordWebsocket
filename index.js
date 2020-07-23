const WebSocket = require('ws');
 
const ws = new WebSocket('ws://RunnyJollySecurity.hyptex.repl.run');
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});