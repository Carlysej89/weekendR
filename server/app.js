
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// Replace http-server so that our domain / port will also have our express paths.
app.use(express.static(__dirname + '/../src'));

app.use(bodyParser.json());

app.get('/', function showHomePage(req, res, next){
  console.log(req.url);
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end('Done!');
});

app.use('/api/meetup', require('./routes/home.route.js'));
app.use('/api/meetup', require('./routes/group.route.js'));

app.listen(3003, function doSomethingOnceTheServerIsUp() {
    console.log('Running!');
});
