const express = require('express');

// Constants
const PORT = 8080;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req,res) => {
   res.send('Hello World'); 
});

console.log('server run! port:' + PORT);
app.listen(PORT);