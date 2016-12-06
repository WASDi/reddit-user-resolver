import http from 'http';
import url from 'url';
import karmaForUser from './KarmaForUser';

const server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    const query = url.parse(req.url, true).query;
    if (query.reddituser) {
        karmaForUser(query.reddituser, result => res.end(result));
    } else {
        res.end("hello");
    }

});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
