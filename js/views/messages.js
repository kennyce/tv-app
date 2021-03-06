
var app = app || {};
app.MessagesView = Backbone.View.extend({
el: '#messages',
initialize: function() {
this.collection = new app.MessageList();
var that = this
setInterval(function(){ that.$el.html('<img src="img/ajax-loader.gif"/>'); that.collection.fetch({reset:true});},5000);
this.render();

this.listenTo( this.collection,'reset',this.render);
},
// render library by rendering each message in its collection
render: function() {
this.collection.each(function( item ) {
this.renderMessages( item );
}, this );
},
// render a book by creating a BookView and appending the
// element it renders to the library's element
renderMessages: function( item ) 
{
var mView = new app.MessView({ model: item});
var that = this;
this.$el.append( mView.render().el );
}
}
);

