import {Tasks, TaskComments} from '/lib/feed';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

// export default function () {
  Meteor.methods({
    'tasks.create'(_id, description) {
      check(_id, String);
      check(description, String);

      // Show the latency compensations
      // Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const uuid = guid()
      const createdAt = new Date();
      const entry = formattedMoment(moment(createdAt))
      const status = "pending"
      const task = {_id, description, uuid, createdAt, entry, status};
      Tasks.insert(task);
    }
  });

  Meteor.methods({
    'tasks.createTaskComment'(_id, taskId, text) {
      check(_id, String);
      check(taskId, String);
      check(text, String);

      // Show the latency compensations
      // Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const author = 'The User';
      const taskcomment = {_id, taskId, author, text, createdAt};
      TaskComments.insert(taskcomment);
    }
  });
//}

Meteor.methods({
  'tasks.update'(data, _id) {
    check(data, {
      type: Match.Optional(String),
      description: Match.Optional(String),
      uuid: Match.Optional(String)
    });
    check(_id, String);

    // console.log ('Tasks.update _id', _id);
    // console.log ('Tasks.update data', data);

    // XXX: Do some user authorization

    Tasks.update({_id: _id}, {$set: {type: data.type}})

/*
    let record = Tasks.findOne(_id);
    console.log(record)
    const allowedFields = [ 'type','description','uuid' ];
    allowedFields.forEach(key => record.set(key,data[key]) );
    record.save(allowedFields);
*/

    // console.log ('Tasks.update record', record);

  },
})
