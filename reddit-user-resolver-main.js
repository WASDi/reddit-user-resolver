var http = require('http');
var url = require('url');
var karmaForUser = require('./karma-for-user');

var server = http.createServer(function(req, res) {

    if (req.url == '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    var query = url.parse(req.url, true).query;
    if (query.reddituser) {
        karmaForUser.resolve(query.reddituser, function(result) {
            res.end(result);
        });
    } else {
        res.end("hello");
    }

});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
