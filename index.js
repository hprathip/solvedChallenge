const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Remove the 'ch-ua-form-factor' feature from Permissions-Policy header
app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');
    next();
});

// Define the server host and port
const host = 'localhost';
const port = 3000;

app.set('view engine', 'ejs');

// Create the server
// const server = http.createServer((req, res) => {
//     // Handle incoming requests
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');

//     res.end("HOME PAGE");

// });

app.get('/generate', (req, res) => {
    // Retrieve data from a database or perform any required operations
    function getRandomInt(min, max) {
        min = Math.ceil(min); // Round up the minimum value
        max = Math.floor(max); // Round down the maximum value
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomInt(1, 100);
    console.log(randomNumber);

    const resp = { num: randomNumber };

    // const data = { message: 'Hello from the backend!' };
    res.json(resp);
});


// Start the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
