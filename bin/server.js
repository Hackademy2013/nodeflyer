var Express = require('express');
var HTTP = require('http');
var IO = require('socket.io');
var Path = require('path');

var app = Express();
var server = HTTP.createServer(app);
var io = IO.listen(server);
var channel = io.of('/nodeflyer');

app.use(Express.logger());
app.use('/nodeflyer', Express.static(Path.resolve(__dirname, '../resource')));
app.all('/', function(req, res) {
	res.redirect('/nodeflyer');
});

// Delete this row if you want to see debug messages
io.set('log level', 1);

// Listen for incoming connections from clients
channel.on('connection', function(socket) {

	// Start listening for mouse move events
	socket.on('clientData', function(data) {

		// This line sends the event (broadcasts it)
		// to everyone except the originating client.
//		console.log(data);
		channel.emit('clientUpdate', data);
	});
});

var sock = 8080;

//This is the port for our web server.
//you will need to go to http://localhost:8080 to see it
server.listen(sock);