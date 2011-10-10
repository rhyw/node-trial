#!/usr/local/bin/node
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //console.log('Request Received.');
  //console.log('Begin to rename file.');
  //fs.rename('/tmp/hello', '/tmp/world');
  //console.log('Rename finished.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
