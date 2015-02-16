EmberChat.ChannelController = Ember.ObjectController.extend({
	actions: {
	  	send: function(){
	  		var username =  "me";
	  		var message = "hey yo"
			var msg = {type:'chat', user: username, kanal: 1, message: message}

			this.socket.socket.json.send(msg);
	  		console.log('yes i send');
	  	}
  	}
});