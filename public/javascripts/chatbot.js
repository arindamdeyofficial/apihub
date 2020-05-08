var PORT = process.env.PORT || 3010; // take port from heroku or for loacalhost
var express = require("express");
var app = express(); // express app which is used boilerplate for HTTP
var http = require("http").Server(app);
//moment js
var moment = require("moment");
//socket io module
var io = require("socket.io")(http);


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
    http.listen(PORT, function() {
        console.log(`started on port: ${PORT}`);
      });
};
module.exports=chatbotinit;