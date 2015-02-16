EmberChat.ChannelController = Ember.ObjectController.extend({
	actions: {
	  	send: function(){
	  		var username =  "me";
	  		var message = "hey yo"
			var msg = {type:'chat', user: username, kanal: 1, message: message}

			this.socket.socket.json.send(msg);
	  		console.log('yes i send');
	  	}
  	},

  	sockets: {
		"message": function(data){
			console.log(data);
		},
	   	// When EmberSockets makes a connection to the Socket.IO server.
        connect: function() {
            console.log('EmberSockets has connected...');
        },

        // When EmberSockets disconnects from the Socket.IO server.
        disconnect: function() {
            console.log('EmberSockets has disconnected...');
        }
  	}
});