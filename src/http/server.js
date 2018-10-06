// include http module in the file
var http = require('http');
var fs = require('fs');

// create a server
http.createServer(function (req, res) {
    console.log('req.url', req.url);
    if (req.url === '/home.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./src/http/'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
        });
    } else {
        // http header
        // 200 - is the OK message
        // to respond with html content, 'Content-Type' should be 'text/html'
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write('Node.js says hello!'); //write a response to the client
        res.end(); //end the response

    }
}).listen(4200); //the server object listens on port 4200
console.log("server is runnig at 4200");


/*
fs.readFile(req.url.substring(1),
            function(err, data) { 
                if (err) throw err;
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
        });
*/