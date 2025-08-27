const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

let users = [
  {
    id: 1,
    name: 'Carmela',
    email: 'mela@gmail.com',
    age: 25,
    salary: 25000,
  },
  {
    id: 2,
    name: 'Joseph',
    email: 'joe@gmail.com',
    age: 30,
    salary: 45000,
  },
  {
    id: 3,
    name: 'James',
    email: 'james@gmail.com',
    age: 35,
    salary: 30000,
  },
  {
    id: 4,
    name: 'John',
    email: 'john@gmail.com',
    age: 40,
    salary: 25000,
  },
  {
    id: 5,
    name: 'Frank',
    email: 'frank@gmail.com',
    age: 45,
    salary: 45000,
  },
  {
    id: 6,
    name: 'Alex',
    email: 'alex@gmail.com',
    age: 21,
    salary: 33000,
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/' + 'create.html');
});

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/users/add', (req, res) => {
  res.sendFile(__dirname + '/pages/' + 'add.html');
});

app.get('/api/users/update', (req, res) => {
  res.sendFile(__dirname + '/pages/' + 'update.html');
});

app.get('/api/users/delete', (req, res) => {
  res.sendFile(path.join(pagesPath, 'delete.html'));
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found.');
  res.send(user);
});

app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: parseInt(req.body.age),
    salary: parseInt(req.body.salary),
  };
  users.push(user);
  res.send(user);
});

app.post('/api/users/update', (req, res) => {
  const id = parseInt(req.body.id);
  const user = users.find((u) => u.id === id);

  if (!user) return res.status(404).send('User not found.');

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.age = req.body.age ? parseInt(req.body.age) : user.age;
  user.salary = req.body.salary ? parseInt(req.body.salary) : user.salary;

  res.send(user);
});

app.get('/api/delete', (req, res) => {
  const id = parseInt(req.query.id, 10);

  if (!id) return res.status(400).send('User ID is required.');

  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).send('User not found.');

  const [deletedUser] = users.splice(index, 1);
  res.json(deletedUser);
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
