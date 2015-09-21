var TodoView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  template: _.template('<li><input type="checkbox"/><p><%= text %></p></li>'),

  events: {
    'click [type="checkbox"]': 'check',
    'click p': 'remove'
  },

  check: function() {
    this.model.set('done', this.$el.find('input').checked);
  },

  remove: function() {
    this.model.destroy();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
