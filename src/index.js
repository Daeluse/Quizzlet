const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'public')));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'public/index.html'));
});

app.listen(8080, () => {
  console.log('app is running');
});