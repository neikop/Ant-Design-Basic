const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();
let server = http.createServer(app);

app.use('/', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api', (request, response) => {
  response.json({code: 200, message: 'Hello'});
});

const port = process.env.PORT || 3003;
server.listen(port, () => {
  console.log('Server is running on: ' + port);
});
