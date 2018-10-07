// include http module in the file
var http = require('http');
var fs = require('fs');
var url = require('url');
const { parse } = require('querystring');

// create a server
http.createServer(function (req, res) {
    console.log('req.url', req.url);
    var reqResource = req.url.split("?")[0];
    if (reqResource === '/home.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    } else if (reqResource === '/userForm.html') {
        console.log('req.url.substring(1)', req.url.substring(1));
        fs.readFile('./'+req.url.substring(1),
            function(err, data) {
                if (err) throw err;
                res.writeHead(200);
                return res.end(data.toString('utf8'));
        });
    } else if (reqResource === '/createUser') {
        console.log('[HK] inside ')
        console.log('req.url.substring(1)', req.url.substring(1));
        var queryData = url.parse(req.url, true).query;
        console.log('queryData>>', queryData);
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(queryData));

    } else if (reqResource === '/updateUser') {
       let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(
                parse(body)
            );
            res.writeHead(200, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify(body));
        });
    }  else {
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