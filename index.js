import {getAll, getItem} from './data.js';
import http from 'http';
import fs from 'fs';



http.createServer(function(req,res) {
  console.log(req.url)
  var path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(getAll()));
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About me: Hello, My name is Clare.');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);