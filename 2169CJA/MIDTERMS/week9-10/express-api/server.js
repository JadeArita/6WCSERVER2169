const express = require('express');
const app = express();
const  PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    res.json({message: 'This is JSON data', time: new Date() });
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json({
        message: `Hello, ${name}!`,
        date: new Date(),
        info: 'Same resource used with personalized using query parameters.'
    });
});

app.get('/dog', (req, res) => {
    const breed = req.query.breed || 'Unknown';
    res.json({
        breed: `${breed}`,
        description: `${breed} is a very energetic dog breed.`
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});