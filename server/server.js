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
      res.status(200).end(JSON.stringify(collection));
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

app.delete('/todos/:id', function(req, res) {
  db.Todo.where({id: req.params.id})
    .destroy()
    .then(function() {
      res.status(200)
        .end();
    });
});

app.post('/todos', function(req, res) {
  new db.Todo(req.body).save()
    .then(function() {
      res.status(201).end();
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

app.listen(3000);
