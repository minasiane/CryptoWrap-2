// load the net module to create tcp server

var net = require('net');

// create new tcp server, handler arg = listener for 'connection' event

var server = net.createServer(function (socket){
	
	// every time someone connects, tell them test succeeded and close connect

	console.log("connection from " + socket.remoteAddress);
	socket.end("Test Succeeded\n");
});

// fire up server and bound to port 7000 on localhost

server.listen(7000, "localhost");

// put friendly msg on the terminal

console.log("TCP server listing on port 7000 at localhost");