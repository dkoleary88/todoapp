var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./tododb.sqlite"
  }
});

knex.schema.hasTable('todo').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('todo', function (todo) {
      todo.increments('id').primary();
      todo.string('text', 255);
      todo.boolean('done');
      todo.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

var bookshelf = require('bookshelf')(knex);

exports.Todo = bookshelf.Model.extend({
  tableName: 'todo'
});
