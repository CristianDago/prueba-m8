const express = require('express');
const app = express();
const data = require('./db.json');
const port = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json(data.users);
});

app.get('/users/:id', (req, res) => {
  const user = data.users.find(u => u.id === parseInt(req.params.id, 10));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server }; // <--- exporta también el servidor
