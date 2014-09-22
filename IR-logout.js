Router.map(function() {
  this.route('main', {path: '/'});
});


if (Meteor.isClient) {
  Session.setDefault('loggedIn', false);

  Router.onBeforeAction(function() {
    if (Session.equals('loggedIn', false)) {
      console.log(console.log('rendering login'));
      this.render('login');
    } else {
      this.next();
    }
  });
  
  Template.login.events({
    click: function() {
      Session.set('loggedIn', true);
    }
  });
  
  Template.main.helpers({
    helper: function() {
      if (Session.equals('loggedIn', false))
        console.error("It shouldn't be possible to run this code!");
      
      return 'helper ran'
    }
  });
  
  Template.main.events({
    click: function() {
      Session.set('loggedIn', false);
    }
  });
  
}
