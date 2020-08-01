const http = require('http');

const HOST = 'localhost';
const PORT = 3000;

/**
 * Request Listener will listen to all the requests.
 * @param {Request} req 
 * @param {Response} res 
 * @return void
 */
const requestListener = (req, res) => {
    console.log('Server started!');
    const url = req.url;

    console.log('URL', url);
    const method = req.method;
    console.log('Method', method);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: 'Server ran successfully' }), 'utf-8');
}

const SERVER = http.createServer(requestListener);

SERVER.listen(PORT, HOST, (err) => {
    if (err) console.log(err.toString());
    else console.log("Server is listening on port", PORT);
})