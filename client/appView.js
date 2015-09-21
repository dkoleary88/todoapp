var AppView = Backbone.View.extend({
  className: 'App',
  initialize: function() {
    this.render();
  },

  render: function() {
    var todos = new Todos();
    this.$el.append(new FormView({collection: todos}).el);
    this.$el.append(new TodosView({collection: todos}).el);
    return this.$el;
  }
});
