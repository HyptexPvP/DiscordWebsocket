const WebSocket = require('ws');
const Discord = require('discord.js');
const client = new Discord.Client();
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws, req) {
  console.log(req)
  console.log(ws)

  const ip = req.socket.remoteAddress;

  ws.on('message', function incoming(data) {
    console.log(data, ip)
        ws.send(data)
    hook.send(data);

   
  });
        
       
    });
        

   client.login('your token here')    

        
