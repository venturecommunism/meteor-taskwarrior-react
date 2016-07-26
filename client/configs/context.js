import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Accounts } from 'meteor/accounts-base'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { registerGqlTag } from 'apollo-client/gql'

import Collections from '/lib/collections/collections'
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Tracker } from 'meteor/tracker'

const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();

  const userId = Meteor.userId() || null;
  const user = Meteor.user();
  const profile = _.get(Meteor.user(), 'profile', {} );
  const email = _.get(Meteor.user(), 'emails[0].address', {});

  return {
    userSubReady,
    userId,
    user,
    email,
    profile,
  };

};

export function initContext(reducer) {
  return {
    ApolloClient,
    createNetworkInterface,
    Meteor,
    FlowRouter,
    Collections,
    Session,
    Accounts,
    registerGqlTag,
    LocalState: new ReactiveDict(),
    Store: createStore(
      reducer,
      applyMiddleware(thunk, createLogger())),
    Tracker,
    authCommon
  }
}
