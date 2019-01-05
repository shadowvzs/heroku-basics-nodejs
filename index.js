// import express module
const express = require('express');

const app = express();
// use enviroment port or the default 8000, which was exposed in container too
const port = process.env.PORT || 8000;

// middleware for static files like index.html
app.use(express.static('public'));

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
