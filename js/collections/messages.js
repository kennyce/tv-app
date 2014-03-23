var app = app || {};
app.MessageList = Backbone.Collection.extend({
model: app.Message,url:'http://192.168.1.7:5000/tvapi'
});


