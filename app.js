const port = process.env.PORT || 3000;
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
console.log(process.version);
http.listen(port, () => {
  console.log('listening on *:3000');
});