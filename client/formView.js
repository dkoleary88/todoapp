var FormView = Backbone.View.extend({
  className: 'form',

  initialize: function() {
    this.render();
  },

  template: _.template('\
    <form>\
      <input type="text" />\
      <button type="submit">Add</button>\
    </form>'),

  events : {
    'submit': 'submit'
  },

  submit: function(e) {
    e.preventDefault();

    var text = this.$el.find('input');
    this.collection.create({text: text.val(), done: false});
    text.val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  }

});
