const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [
    { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
    { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
    { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
    { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
    { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
    { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 }
];

app.get('/', (req, res) => {
    res.send(`
        <h1>Available Routes</h1>
        <ul>
            <li><strong>GET /api/users:</strong> Returns all users.</li>
            <li><strong>GET /api/users/:id:</strong> Fetches a specific user by ID.</li>
            <li><strong>POST /api/users:</strong> Adds a new user.</li>
            <li><strong>DELETE /api/users/:id:</strong> Deletes a user by ID.</li>
        </ul>
    `);
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found.');
    }
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
   
    if (!newUser.name || !newUser.email) {
        return res.status(400).send('Name and email are required.');
    }
   
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    newUser.id = newId;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        
        users[userIndex] = { ...users[userIndex], ...updatedUser, id: userId };
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found.');
    }
});

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const initialLength = users.length;
    users = users.filter(u => u.id !== userId);

    if (users.length < initialLength) {
        res.status(200).send('User deleted successfully.');
    } else {
        res.status(404).send('User not found.');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});