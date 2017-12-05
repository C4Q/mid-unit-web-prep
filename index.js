const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(homepage);
});
app.get('/cody', (req, res) => {
  res.json({
    msg: 'hello crystal g'
  });
});
app.listen(9998);

let homepage = `
  <html>
  <head>
  <link href="mid-unit-test.css"
        type="text/css" rel="stylesheet">
  <script src="mid-unit-test.js"></script>
  </head>
  <body>
  <p id="responseP"></p>
  <button id="codyB">Cody Button!</button>
  </body>
  </html>
`;
