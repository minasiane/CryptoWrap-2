// load http module to creat an http server

var http = require('http');

// configure server to respond with test succeeded to all requests

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Test Succeeded\n");
});

// listen via port 8000, ip defaults to 127.0.0.1

server.listen(8000);

// put a friendly msg in terminal

console.log("Server running at http://127.0.0.1:8000/");