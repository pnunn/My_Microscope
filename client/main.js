newPostsHandle = Meteor.subscribeWithPagination('newPosts',10);
bestPostsHandle = Meteor.subscribeWithPagination('bestPosts', 10);

Deps.autorun(function() {
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');

window.intercomSettings = {
    // TODO: The current logged in user's email address.
    email: "john.doe@example.com",
    // TODO: The current logged in user's sign-up date as a Unix timestamp.
    created_at: 1234567890,
    app_id: "371443b2e9ce6ad40d394e5ec4ede3192ea5f250"
};
