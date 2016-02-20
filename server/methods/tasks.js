import {_tasks} from '/lib/collections';
// import {_task} from '/lib/task.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// import _ from 'lodash';

Meteor.methods({

  '_tasks.add'(data, _id) {
    check(data, {
      title: String,
      content: String
    });
    check(_id, String);

    // console.log('_tasks.add data', data);

    // XXX: Do some user authorization

    data._id = _id;
    data.createAt = new Date();
    // const object = {_id, data.title, data.content, createdAt};
    _tasks.insert(data);
  },

  '_tasks.update'(data, _id) {
    check(data, {
      title: String,
      content: String
    });
    check(_id, String);

    // console.log ('_tasks.update _id', _id);
    // console.log ('_tasks.update data', data);

    // XXX: Do some user authorization

    let record = _tasks.findOne(_id);
    const allowedFields = [ 'title','content' ];
    allowedFields.forEach(key => record.set(key,data[key]) );
    record.save(allowedFields);

    // console.log ('_tasks.update record', record);

  },

  '_tasks.delete'(_id) {
    check(_id, String);
    //  console.log('_tasks.delete _id', _id);
    let record = _tasks.findOne(_id);
    record.remove();
  }
});
