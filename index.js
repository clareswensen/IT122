import http from 'http';
import { parse } from "querystring";
import * as oyster from "./data.js";


http.createServer(function(req,res) {
  console.log('createServer got request')
  var path = req.url.toLowerCase();
  let url_parts = req.url.split("?");
  let query = parse(url_parts[1]);
  
  switch(url_parts[0]) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(oyster.getAll(), null, '\t'));
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About me: Hello, My name is Clare. I love oysters');
      break;
    case '/detail':
      let found = oyster.getItem(query.name); // get oyster object
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = (found) ? JSON.stringify(found,null, '\t') : "Not found";
      res.end('Results for ' + query.name + "\n" + results);
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);