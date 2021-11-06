const express = require('express');

const app = express();

app.get('/', (req,res) => res.send ('<h1> Express con HTML</h1>'))

server.listen(3000);
console.log('Server on port 3000')