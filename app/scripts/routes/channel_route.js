EmberChat.ChannelRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('channel', 1).then(function (channel) {
			console.log(channel);
			return channel;
		});
	},
 	setupController: function(controller, model) {
 		console.log("ChannelRoute");
    	controller.set('model', model);
  	}
});
