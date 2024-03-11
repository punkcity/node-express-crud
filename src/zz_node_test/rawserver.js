const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':  // Home Page
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':  //Another VALID Page
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':  //GOOD EXAMPLE - Redirect to /about
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();  //IMPORTANT - End the response here
            break;
        default:
            //For ALL OTHER INVALID URLs
            path += 'notfound.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //NOTE: Instead of Separately writing res.write(data) and res.end(), 
            // we can use res.end(data)
            res.end(data);
        }
    });
});

server.listen(3011, 'localhost', () => {
    console.log('Server is RUNNING! Listening on port 3001');
});
