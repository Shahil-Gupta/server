const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Send a response to the client
    res.statusCode = 200; // HTTP status code: 200 OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello bye\n');
});

const port = 4002;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});