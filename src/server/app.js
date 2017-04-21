
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + './server'));

app.use(bodyParser.json());

app.get('/', function showHomePage(req, res, next){
  console.log(req.url);
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.end('Done!');
});

app.use('/api/meetup', require('./routes/home.route.js'));

app.listen(3000, function doSomethingOnceTheServerIsUp() {
    console.log('Running!');
});
