var app = app || {};
app.MessView = Backbone.View.extend({
tagName: 'div',
className: 'msgContainer',
template: _.template( $('#msgTemplate').html() ),
render: function() {
// tmpl is a function that takes a JSON object and returns html
// this.el is what we defined in tagName. use $el to get access
// to jQuery html() function
this.$el.html( this.template( this.model.toJSON() ));
return this;
}
})
