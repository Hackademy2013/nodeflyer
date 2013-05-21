var Express = require('express');
var Path = require('path');

exports.path = "/nodeflyer";

var app = exports.app = Express();
app.use(Express.logger());
app.use(Express.static(Path.resolve(__dirname, 'resource')));

exports.socket = function(io) {
	var channel = io.of('/nodeflyer');
	channel.on('connection', function (socket) {

	    // Start listening for mouse move events
	    socket.on('clientData', function (data) {

	        // This line sends the event (broadcasts it)
	        // to everyone except the originating client.
	        console.log(data);
	        channel.emit('clientUpdate', data);
	    });
	});
};
