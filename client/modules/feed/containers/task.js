// NOTE, doing meteor data/collections this way loses much of Meteor's
// 'magic' and makes more work for us but i'm totally ok trading convenience
// for flexibility and easier to reason with security rules. You can still
// use one liner insert/update methods if you opt into using allow/deny based
// security. Perhaps someone can submit a branch using this methodology too!
//
// also, becauses i'm lazy, I made a file generator to create the below for you!
// https://github.com/AdamBrodzinski/meteor-generate/tree/react

import {Tasks} from '/lib/feed'

var schema = {
  _id: String,
  uuid: String, // taskwarrior related
  created: Date,
  entry: String, // taskwarrior related
  updated: Date,
  owner: String,
  username: String,
  description: String, // taskwarrior related
  status: String, // taskwarrior related
  likecount: Number,
  commentcount: Number
};

//Tasks = new Mongo.Collection('tasks');

// optionally run hook to log, audit, or denormalize mongo data
Tasks.after.insert(function (userId, doc) {
  console.log("Inserted Doc", userId, doc);
});


// Task Model
//
// Pass the doc id in as the first param, security checks will ensure
// that a user is only allowed to mutate their own document.
//
// Running these Meteor.call's on the client will *only* run a simulation
// for optimistic UI and the server copy does the realy data mutating.
// This prevents users from tampering data. Trust *nothing* on the client!
//
// The TaskDomain now directly calls the Meteor method instead of having a
// fat model. This approach is more oriented towards Flux and makes it easier
// to reason about data flow. Domains should be the only thing calling these
// model methods (on the client) and the domain method should only be called
// by an action (views never mutate data)
//
// Example:
//
//   Meteor.call('Task.create' {
//     description: 'Hello World',
//   });
//
//   Meteor.call('Task.update', '1234', {
//     description: 'Goodbye World',
//   });
//
// ** Security README **
//
// all Task insert, update & delete MiniMongo methods are disabled on the client
// by not having allow/deny rules. This ensures more granular security & moves
// the security logic into the meteor method. all mutation has to happen with
// the Meteor methods. These methods are placed into the 'both' folder so that
// Meteor uses the methods as stubs on the client, retaining the latency
// compensation. if you need to hide the model logic, move the methods into the
// server directory. doing so will lose latency compensation, however a stub
// can be created on the client folder to re-enable latency compensation.

Meteor.methods({
  /**
   * Creates a Task document
   * @method
   * @param {object} data - data to insert
   * @param {object} data.description - task text content
   * @param {object} data.username - task owner username
   * @returns {string} of document id
   */
  "Task.create": function(data) {
    var docId;
    if (!this.userId) throw new Meteor.Error(401, "Login required");

    data.owner = this.userId; // XXX cleanup
    data.created = new Date();
    data.updated = new Date();
    data.likecount = 0;
    data.commentcount = 0;
    data.uuid = guid()
    data.entry = formattedNow()
    data.status = "pending"

    // ensure user doesn't send extra/evil data
    // ignore _id since it's not created yet
    check(data, _.omit(schema, '_id'));

    docId = Tasks.insert(data);

    console.log("[Task.create]", docId);
    return docId;
  },


  /**
   * Updates a Task document using $set
   * @method
   * @param {string} docId - The doc id to update
   * @param {object} data - data to update
   * @returns {number} of documents updated (0|1)
   */
  "Task.update": function(docId, data) {
    var count, selector;
    var optional = Match.Optional;

    check(docId, String);
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");
    data.updated = new Date();

    // whitelist what can be updated
    check(data, {
      updated: schema.updated,
      description: optional(schema.description),
      commentcount: optional(schema.commentcount),
      likecount: optional(schema.likecount)
    });

    // if caller doesn't own doc, update will fail because fields won't match
    selector = {_id: docId, owner: User.id()};

    count = Tasks.update(selector, {$set: data});

    console.log("  [Task.update]", count, docId);
    return count;
  },


  /**
   * Destroys a Task
   * @method
   * @param {string} docId - The doc id to destroy
   * @returns {number} of documents destroyed (0|1)
   */
  "Task.destroy": function(docId) {
    check(docId, String);

    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    // if caller doesn't own doc, destroy will fail because fields won't match
    var count = Tasks.remove({_id: docId, owner: User.id()});

    console.log("  [Task.destroy]", count);
    return count;
  },


  /**
   * Naive implementation of increment like count by 1
   * this will not check for multiple like by the same person or
   * even track who liked it. Perhaps after releasing we can fix this
   *
   * @method
   * @param {string} docId - The doc id to like
   * @returns {number} of documents updated (0|1)
   */
  "Task.like": function(docId) {
    check(docId, String);
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    var count = Tasks.update({_id: docId}, {$inc: {likecount: 1} });

    console.log("  [Task.like]", count);
    return count;
  },

  /**
   * Increment a field on Task doc, only allow comments to pass for now
   * @method
   * @param {string} docId - The doc id to like
   * @returns {number} of documents updated (0|1)
   */
  "Task.increment": function(docId, fieldName) {
    check(fieldName, "commentcount");
    if (User.loggedOut()) throw new Meteor.Error(401, "Login required");

    var incField = {};
    incField[fieldName] = 1;
    var count = Tasks.update({_id: docId}, {$inc: incField });

    console.log("Task.increment]", count);
    return count;
  },
});

