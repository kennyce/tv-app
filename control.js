<script type="text/template" id="msg-template">
<div class="view">
	<label><%- sender %> said: <%- message %> at <%- time %></label>
</div>
</script>


// site/js/models/book.js
var app = app || {}
app.Messages = Backbone.Model.Extend({
						defaults:{
							'id':'1000'
							'sender':'Me'
							'message':'Test'
							'time':''
							}
							});

// site/js/collections/library.js
var app = app || {};
app.MessageList = Backbone.Collection.extend({
model: app.Messages
});

// site/js/views/book.js
var app = app || {};
app.MessageView = Backbone.View.extend({
tagName: 'div',
className: 'messageContainer',
template: _.template( $('#messageTemplate').html() ),
render: function() {
// tmpl is a function that takes a JSON object and returns html
// this.el is what we defined in tagName. use $el to get access
// to jQuery html() function
this.$el.html( this.template( this.model.toJSON() ));
return this;
}
});

var app = app || {};
app.MessagesView = Backbone.View.extend({
el: '#messages',
initialize: function( initialMessages ) {
this.collection = new app.Messages( initialMessages );
this.render();
},
// render library by rendering each book in its collection
render: function() {
this.collection.each(function( item ) {
this.renderMessages( item );
}, this );
},
// render a book by creating a BookView and appending the
// element it renders to the library's element
renderMessages: function( item ) {
var mView = new app.MessagesView({
model: item
});
this.$el.append( mView.render().el );
});
}

var app = app || {};
$(function() {
var messages = [
{ id: '1: The Good Parts', sender: 'Douglas Crockford',
message: '2008', time: 'JavaScript Programming' },
{ id: '2: The Good Parts', sender: 'Douglas Crockford',
message: '2008', time: 'JavaScript Programming' },
{ id: '3: The Good Parts', sender: 'Douglas Crockford',
message: '2008', time: 'JavaScript Programming' },
{ id: '4: The Good Parts', sender: 'Douglas Crockford',
message: '2008', time: 'JavaScript Programming' },
{ id: '5: The Good Parts', sender: 'Douglas Crockford',
message: '2008', time: 'JavaScript Programming' }
];
new app.LibraryView( messages );
});

							
