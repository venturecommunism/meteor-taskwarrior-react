import Collections from '/lib/collections/collections'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Meteor} from 'meteor/meteor'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactiveDict} from 'meteor/reactive-dict'
import {Session} from 'meteor/session'
import {Tracker} from 'meteor/tracker'

export function initContext(reducer) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Session,
    LocalState: new ReactiveDict(),
    Store: createStore(
      reducer,
      applyMiddleware(thunk, createLogger())),
    Tracker
  };
}
