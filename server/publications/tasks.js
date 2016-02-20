import {_tasks} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('_tasks.list', function () {
  const selector = {};
  const options = {
    fields: {_id: 1, title: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return _tasks.find(selector, options);
});

Meteor.publish('_tasks.single', function (_id) {
  check( _id, String);
  const selector = {_id};
  const response = _tasks.find(selector);
  // console.log('publish _tasks.single _id', _id);
  // console.log('publish _tasks.single response.title', response.title);
  return response;
});
