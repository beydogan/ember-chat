EmberChat.ChannelsConnectController = Ember.Controller.extend({
	actions: {
	  	connect: function(){
	  		var username = this.get("username");
	  		var channel_id = this.get("channel_id");
	  		var msg = {type:'setUsername',user:username, kanal: channel_id};
  			console.log(this.store.find("channel", 1))
	  		//debugger;
			this.socket.socket.json.send(msg);
	        this.transitionToRoute('channel', channel_id);
	  	}
  	}
});