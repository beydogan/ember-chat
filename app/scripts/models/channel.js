var attr = DS.attr;
EmberChat.Channel = DS.Model.extend({
	name: attr('string')
});


EmberChat.Channel.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Trek' },
    { id: 2, name: 'Tom'}
  ]
});