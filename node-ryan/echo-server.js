
//var http = require('http');
var net = require('net');
//var server = http.createServer(function(req, res){
//    res.writeHeader(200, {'content-type':'text/plain'});
//    res.end('Hello, World!');
//})

var server = net.createServer(function(socket){
    socket.write("Echo server\n");
    socket.pipe(socket);
})

server.listen(8001);

