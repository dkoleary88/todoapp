var express = require('express');
var db = require('./db.js');
var models = require('./models.js');
var app = express();

app.get('/todos', function(req, res) {
  res.statusCode(200);
  db.Todo.fetchAll()
    .then(function(collection) {
      res.end(collection.serialize());
    });
});

app.post('/todos', function(req, res) {
  new db.Todo(req.data).save()
    .then(function() {
      res.end(201);
    });
});
