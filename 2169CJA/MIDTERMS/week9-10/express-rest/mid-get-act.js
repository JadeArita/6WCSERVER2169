const express = require('express');
const app = express();

const movies = [
  { id: 1, title: 'Superman' },
  { id: 2, title: 'Thor' },
  { id: 3, title: 'Iron Man' }
];

app.get('/', (req, res) => {
    res.send('Welcome to the movie API!');
});

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    return res.status(404).send('The movie with the given ID was not found.');
  }

  res.json(movie);
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
