const express = require('express'),
      hbs     = require('hbs');

const port = process.env.PORT || 4000; //to connect to heroku OR locol host

var app = express();


app.use(express.static(__dirname + '/public')); //let express use /public folder
hbs.registerPartials(__dirname + '/views/partials'); //Let hbs use partials
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('landing.hbs');
});

app.get('/main', (req, res) => {
  res.render('index.hbs');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
