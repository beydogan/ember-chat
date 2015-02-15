EmberChat.Router.map(function () {
  this.route("index", { path: "/" });
  this.resource('channels', function() {
    this.resource('channel', { path:'/:channel_id' });
    this.route('connect');
  });
});
