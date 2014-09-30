Blogger.NewCommentController = Ember.ObjectController.extend({
  needs: ['post'],
  actions: {

    save: function() {

      var comment = this.store.createRecord('comment', {

      text: this.get('text')

    });


    var post = this.get('controllers.post.model');

    post.get('comments').pushObject(comment);

    comment.save();

    this.transitionToRoute('post', post.id);

    }

  }

});
