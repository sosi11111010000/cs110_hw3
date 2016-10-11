var http = require('http');



http.createServer(function (req, res){

if(req.url === '/hello'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("Hii how are you?\n -good (+ /good)\n -bad (+ /bad)\n  ");
}
else  if(req.url === '/hello/good') {
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("I'm glad you're good, have a nice day ^-^\n");
}
else if(req.url === '/hello/bad'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("Why? What's wrong?\n -Homework is too much!!! (+ /hw)\n -I'm sick and have a fever :( (+ /fever)\n");
}

else if(req.url === '/hello/bad/hw'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("I'm sure you can do it, if not ask for help :)\n");
}
else if(req.url === '/hello/bad/fever'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("Aww you should probably go to the nurse, get better ^u^\n");
}
else
{
res.writeHead(404, {'Content-Type' : 'text/plain'});
res.end("Hiiii\n -Hello :) (/hello)\n");
}

}).listen(713);


