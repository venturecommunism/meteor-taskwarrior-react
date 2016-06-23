import { taskspending } from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {
  Meteor.methods({
    'tasks.create'(data, _id) {
      check(data, {
        workflow: String,
        description: String,
        uuid: String,
        created: Date,
        entry: String,
        status: String,
        username: String,
      })
      check(_id, String)

      // console.log('_tasks.add data', data)

      // XXX: Do some user authorization

      data._id = _id

      taskspending.insert(data)
    },
    'tasks.update'(data, _id) {

console.log("data", data)

      check(data, {
        uuid: Match.Optional(String),
        description: Match.Optional(String),
        type: Match.Optional(String),
        project: Match.Optional(String),
        context: Match.Optional(String),
        workflow: Match.Optional(String),
        created: Match.Optional(Date),
        entry: Match.Optional(String),
        status: Match.Optional(String),
        username: Match.Optional(String),
        __context: Match.Optional(String),
      })
      check(_id, String)

      // console.log ('tasks.update _id', _id)
      // console.log ('tasks.update data', data)

      // XXX: Do some user authorization

      let record = taskspending.findOne(_id)
      const allowedFields = [ 'uuid', 'description', 'type', 'project', 'context', 'workflow', 'entry', 'status', 'username', '__context' ]
      allowedFields.forEach(key => record.set(key,data[key]) )
      record.save(allowedFields)

      // console.log ('tasks.update record', record)

    },
    '_tasks.delete'(_id) {
      check(_id, String)
      //  console.log('_tasks.delete _id', _id)
      let record = _tasks.findOne(_id)
      record.remove()
    }
  })
}
