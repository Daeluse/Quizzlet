const express = require('express');
const path = require('path');

const questions = require('./data/questions');
const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'public')));

app.get('/api/questions', (_, res) => {
  res.send(questions);
});

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'public/index.html'));
});

app.listen(8080, () => {
  console.log('app is running');
});