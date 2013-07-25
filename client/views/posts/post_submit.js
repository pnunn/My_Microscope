Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    Meteor.call('post', post, function(error,id) {
      if(error) {
        // display the error to the user
       Meteor.Errors.throw(error.reason);

       // if the error is that the post already existis, take us there
       if(error.error === 302) 
        Meteor.Router.to('postPage', error.details)
      } else { 
        Meteor.Router.to('postPage', id);
      }
    });
  }
});

