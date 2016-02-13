import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'posts.create'(_id, description) {
      check(_id, String);
      check(description, String);

      const createdAt = new Date();
      const post = {
        _id, description, createdAt,
        saving: true
      };

      Collections.Posts.insert(post);
    }
  });
}
