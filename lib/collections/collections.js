import {Mongo} from 'meteor/mongo';

export default {
  Posts: new Mongo.Collection('posts'),
  Comments: new Mongo.Collection('comments'),
  _colors: new Mongo.Collection('_colors'),
  _tasks: new Mongo.Collection('_tasks'),
  tasks: new Mongo.Collection('tasks'),
  taskspending: new Mongo.Collection('taskspending'),
  tasksbacklog: new Mongo.Collection('tasksbacklog'),
  Timer: new Mongo.Collection('timer'),
//  Tasks: new Mongo.Collection('tasks')
}
