const port = process.env.PORT || 3000;
var app = require('express')();
//var http = require('http').createServer(app);
var server = app.listen(port, () => {
  console.log('listening on *:3000');
});
var io = require('socket.io').listen(server);;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
console.log(process.version);

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