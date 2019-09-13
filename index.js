const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const message = process.env.MESSAGE ? process.env.MESSAGE : 'No message';

  res.send(`<h1>${message}</h1>`)
});

const server = app.listen(3000, () => {
  console.log('App listening on port', server.address().port);
});
