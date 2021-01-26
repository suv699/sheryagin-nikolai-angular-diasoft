const express = require('express');
const server = express();
const PORT = 3000;

server.get('/', (req, res)=> res.send(`<div>Hello World</div>`));
server.get('*', (req, res)=> res.send(`<div>404 Not Found</div>`));
server.post('/', (req, res)=> res.send(`<div>Hello World post</div>`));
server.put('/', (req, res)=> res.send(`<div>Hello World put</div>`));
server.delete('/', (req, res)=> res.send(`<div>Hello World delete</div>`));

server.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT} !`);
});