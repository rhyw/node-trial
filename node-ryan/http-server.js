#!/usr/bin/env node

var http = require('http');
var s = http.createServer(function(req, res){
    res.writeHeader(200, {'ContentType':'text/plain'});
    res.end('Hello, World!\n');
});

s.listen(8000);
console.log('Server listening on port 8000');
