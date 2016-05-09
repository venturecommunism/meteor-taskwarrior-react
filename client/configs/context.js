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
    Tracker
  }
}
