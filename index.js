const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


var data = require('./data/test.json');
app.get('/', (req, res) => {
  // res.send('Ola Express!');
  var title = 'Home Page';
  res.render('pages/index', {'title': title});
});


app.get('/about', (req, res) => {
  // res.send('Ola Express!');
  var title = 'About Page';
  res.render('pages/about', {'title': title});
});

app.get('/blurb', (req, res) => {
  // res.send('Ola Express!');
  var title = 'The Lying Life of Adults by Elena Ferrante.';
  res.render('pages/blurb', {'title': title});
});

app.get('/adapt', (req, res) => {
  // res.send('Ola Express!');
  var title = 'TV Adaptation.';
  res.render('pages/adapt', {'title': title});
});

app.get('/breview', (req, res) => {
  // res.send('Ola Express!');
  var title = 'Book Review.';
  res.render('pages/breview', {'title': title});
});
//users index is the list/view page assignment
app.get('/tvreview', function(req, res) {
	var title = 'TV Review.';
	res.render('pages/tvreview', {
    	title: title,
  });
});
app.get('/users', function(req, res) {
	var title = 'Users Page.';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});


app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);

})
