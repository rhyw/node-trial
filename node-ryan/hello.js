
var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHeader(200, {'content-type':'text/plain'});
    res.end('Hello, World!');
})

server.listen(8000);

