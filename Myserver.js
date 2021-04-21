const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;
const baseUrl = 'http://' + hostname + ':' + port;

function start(route, handle) {
    function onRequest(req, res) {
        let sBody = 'Hello, world! <br> I am in the cloud class.'

        console.log('Request receive.');
        pathname = new url.URL(req.url, baseUrl)
        route(pathname, handle, res);
    }

    server = http.createServer(onRequest)
    server.listen(port, hostname);
    console.log('Server is running at ' + baseUrl);
}

exports.start = start;