var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db.js');
var models = require('./models.js');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('../client'));

app.get('/todos', function(req, res) {
  db.Todo.fetchAll()
    .then(function(collection) {
      res.status(200).end();
    });
});

app.put('/todos/:id', function(req, res) {
  db.Todo.where({id: req.params.id})
    .set('done', req.body.done)
    .save()
    .then(function() {
      res.status(202).end();
    });
});

app.post('/todos', function(req, res) {
  console.log(req.body);
  new db.Todo(req.body).save()
    .then(function() {
      res.status(201).end(201);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
});

app.listen(3000);
