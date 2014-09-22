Router.map(function() {
  this.route('main', {path: '/'});
});


if (Meteor.isClient) {
  Router.onBeforeAction(function() {
    if (! Meteor.userId()) {
      console.log(console.log('rendering login'));
      this.render('login');
    } else {
      this.next();
    }
  });
  
  Template.main.helpers({
    helper: function() {
      if (! Meteor.userId())
        console.error("It shouldn't be possible to run this code!");
      
      return 'helper ran'
    }
  });
}
