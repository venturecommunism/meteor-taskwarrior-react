import {tasks, TaskComments} from '/lib/collections'
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

// export default function () {

  var optional = Match.Optional;

  Meteor.publish('feed', function(fields, limits, taskIds) {
    check(limits, {tasks: Number});
    check(taskIds, Match.OneOf(null, [String]));

    console.log('Publishing Tasks', fields);
    console.log("Limit:", limits);

    // SECURITY NOTE
    // if this was data that could not be shown to a specific set of
    // users or a logged out user, you would check here to verify they're
    // allowed to receive the data.
    // **TRUST NOTHING FROM THE CLIENT** instead ask the server what they're
    // user ID is and check their permissions to see if the role is met, never
    // never pass in the user ID from the client as they could guess an admin
    // ID and gain access.
    //
    //  if (!this.userId)
    //       throw new Meteor.Error(401, "Access denied, please login");
    //        or
    //  if (Roles.userIsInRole(this.userId, 'admin'))
    //       throw new Meteor.Error(403, "Not authorized to view this data");
    // -----------------------------------------------------------------------


    // ensure *only* the fields we whitelist are passed in. Unless wrapped in
    // Match.Optional it will be required. If any key does not match the
    // publication will fail and throw an error
    check(fields, {
      tasks: {
        _id: Boolean,  // id required for security
        title: optional(Boolean),
        description: optional(Boolean),
        likecount: optional(Boolean),
        taskcommentcount: optional(Boolean),
        username: optional(Boolean),
        created: optional(Boolean),
        owner: optional(Boolean),
        status: optional(Boolean),
        entry: optional(Boolean),
        uuid: optional(Boolean),
        type: optional(Boolean),
      },
      taskComments: {
        _id: Boolean,  // id required for security
        created: optional(Boolean),
        description: optional(Boolean),
        username: optional(Boolean),
        task: optional(Boolean)
      }
    });


    // returns Mongo Cursors
    return [
      tasks.find({}, {fields: fields.tasks, sort: {created: -1}, limit: limits.tasks}),
      TaskComments.find({task: {$in: taskIds ? taskIds : []}}, {fields: fields.taskComments})
    ];
  });

// }
