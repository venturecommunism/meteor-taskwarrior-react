import {Posts, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(_id, description) {
      check(_id, String);
      check(description, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const uuid = guid()
      const createdAt = new Date();
      const entry = formattedMoment(moment(createdAt))
      const status = "pending"
      const post = {_id, description, uuid, createdAt, entry, status};
      Posts.insert(post);
    }
  });

  Meteor.methods({
    'posts.createComment'(_id, postId, text) {
      check(_id, String);
      check(postId, String);
      check(text, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const author = 'The User';
      const comment = {_id, postId, author, text, createdAt};
      Comments.insert(comment);
    }
  });
}
