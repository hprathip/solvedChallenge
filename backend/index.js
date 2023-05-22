const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');
    next();
});

const host = 'localhost';
const port = 3000;

app.set('view engine', 'ejs');

app.get('/generate', (req, res) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min); // Round up the minimum value
        max = Math.floor(max); // Round down the maximum value
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomInt(1, 100);
    // console.log(randomNumber);
    const resp = { num: randomNumber };
    res.json(resp);
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
