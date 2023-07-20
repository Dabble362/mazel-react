const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 2500;
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
});

app.get('/test', (req, res) => {
  res.send({
    message: "type a message",
    currentTime: new Date(),
  })
});
