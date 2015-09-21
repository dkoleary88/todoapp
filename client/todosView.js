var TodosView = Backbone.View.extend({

  className: 'todos',

  initialize: function() {
    this.render();
    this.collection.on('change destroy add', this.render.bind(this));
  },

  template: _.template('<ul class="todos"><ul>'),

  render: function() {
    this.collection.forEach(function(todo) {
      this.$el.append(new TodoView({model: todo}).render());
    }, this);
    return this.$el;
  }
});
