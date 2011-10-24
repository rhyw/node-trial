#!/usr/bin/env node

var http = require('http');
var s = http.createServer(function(req, res){
    res.writeHeader(200, {'ContentType':'text/plain'});
    res.write("hello\n");
    setTimeout(function() {
        res.end('world\n');
    }, 2000);
});

s.listen(8000);
console.log('Server listening on port 8000');
