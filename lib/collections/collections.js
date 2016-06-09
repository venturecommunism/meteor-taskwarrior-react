import {Mongo} from 'meteor/mongo'

export const taskspending = new Mongo.Collection('taskspending')
export const tasksbacklog = new Mongo.Collection('tasksbacklog')
export const Timer = new Mongo.Collection('timer')
export const tmpmutation = new Mongo.Collection('tmpmutation')
