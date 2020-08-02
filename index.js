const http = require('http');

const HOST = 'localhost';
const PORT = 3000;

const ACCEPTED_PATHS = {
    '': true,
    '/': true,
    'user': {
        '': true,
        '/': true,
        '*': true
    }
};
/**
 * Extracts URL for more information about patterns.
 * @param {string} path : URL in Request.
 * @param {Request} req : Request object
 * @param {Response} res : Response object.
 */
const extractDataFromPath = (path, req, res) => {
    const pathParts = path.split('/');
    pathParts.shift();
    
    for (const part of pathParts) {
        
    }
}

/**
 * Request Listener will listen to all the requests.
 * @param {Request} req 
 * @param {Response} res 
 * @return void
 */
const requestListener = (req, res) => {
    console.log('Server started!');
    const url = req.url;
    extractDataFromPath(url, req, res);
    console.log('URL', url);
    const method = req.method;
    console.log('Method', method);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: 'Server ran successfully' }), 'utf-8');
}

// Creating Server
const SERVER = http.createServer(requestListener);

/**
 * Server Listener.
 */
SERVER.listen(PORT, HOST, (err) => {
    if (err) console.log(err.toString());
    else console.log("Server is listening on port", PORT);
})