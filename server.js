const express = require('express');
const app = express();

const port = 2500;
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
});

app.get('/', (req, res) => {
  res.send('You all up innit now')
});
