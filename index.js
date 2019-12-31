const Person = require('./Person'); 
//const Logger = require('./logger');
const http = require('http');
const path = require('path');
const fs = require('fs');

/* const person1 = new Person('Dio Brando', 26);

console.log(person1.greeting()); */

/* const logger = new Logger();
logger.on('message', data => console.log('Called Listener:', data));

logger.log('Hello World.') */

const server = http.createServer((req, res) => {
    /* if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if(req.url === '/api/users'){
        const users = [
            new Person('Dio Brando', 17),
            new Person('Johnathan Joestar', 17)
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } */

    //Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    
    //Extension of file
    let extName = path.extname(filePath);

    //Check ext and set content type
    let contentType = 'text/html';
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': contentType});
                    res.end(content, 'utf8');
                });
            } else {
                //Some server error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        } else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));