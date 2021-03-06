const port = process.env.PORT || 3100;
var app = require('express')();
var server = app.listen(port, () => {
  console.log('listening on *:3000');
});
var io = require('socket.io').listen(server);;
//moment js
var moment = require("moment");

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://apihubnode.azurewebsites.net/socket.io');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// io.on listens for events
io.on("connection", function(socket) {
  console.log("User is connected to socket id: ", socket.id);
  socket.emit('chatmsg', 'User is connected to socket id: '+socket.id);

 socket.on('chatmsg', (msg) => {
    console.log(msg.message);
    io.sockets.emit('chatmsg', msg.message);
  });
  socket.on('typing', (msg) => {
    io.sockets.emit('typing', 'others are typing...');
  });
});

function chatbotinit(){http.close();
  console.log(process.version);
};
module.exports=chatbotinit;