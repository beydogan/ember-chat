EmberChat.ChannelsConnectController = Ember.Controller.extend({
	actions: {
	  	connect: function(){
	  		var username = this.get("username");
	  		var channel_id = this.get("channel_id");
	  		console.log(username);
	  		console.log(channel_id);
	  	}
  	}
});