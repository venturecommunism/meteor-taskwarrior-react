import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'tasks.create'(_id, description) {
      check(_id, String);
      check(description, String);

      const createdAt = new Date();
      const task = {
        _id, description, createdAt,
        saving: true
      };

      Collections.Tasks.insert(task);
    }
  });
}
