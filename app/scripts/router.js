EmberChat.Router.map(function () {
  this.route("index", { path: "/" });
  this.resource('channels', function() {
    this.route('connect');
  });
});
