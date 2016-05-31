import feed from '../../bfeed/actions/feed'
import filterprojects from '../../bfeed/actions/filterprojects'

import { composeWithTracker, composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/usedeps'

const collectionComposer = ({ context, query, err }, onData) => {
  const { Meteor, Collections, Store, LocalState } = context()
  const { sidebarReducer } = Store.getState()

  const error = err ? LocalState.get(err().errortype) : null

  const { connection, collection, selector, pubsort, subsort, limit } = query()
  var runselector = selector()

  const fields = {
    tasks: {
      _id: true,
      description: true,
      uuid: true,
      status: true,
      entry: true,
      likecount: true,
      taskcommentcount: true,
      username: true,
      created: true,
      owner: true,
      type: true,
      workflow: true,
      project: true,
      due: true,
    },
  }

  if (Meteor.subscribe('feed', fields, runselector, pubsort, limit).ready()) {
    const data = Mongo.Collection.get(collection, { connection: connection }).find(runselector, {sort: subsort, reactive: false}).fetch()

    console.log("data", data)

    var feedsubcollection = feed.query().collection
    var feedsubconnection = feed.query().subconnection
    var feedsubselector = feed.query().selector
    var feedrunsubselector = feedsubselector()
    var feedsubsubsort = feed.query().subsort
    data.feed = Mongo.Collection.get(feedsubcollection, { connection: feedsubconnection }).find(feedrunsubselector, {sort: feedsubsubsort}).fetch()

    console.log(data.feed)

    var subcollection = filterprojects.query().collection
    var subconnection = filterprojects.query().subconnection
    var subselector = filterprojects.query().selector
    var runsubselector = subselector()
    var subsubsort = filterprojects.query().subsort
    data.feed.filterprojects = Mongo.Collection.get(subcollection, { connection: subconnection }).find(runsubselector, {sort: subsubsort}).fetch()

    //console.log('Connection', connection)
    //console.log('Collection', collection)
    //console.log('Selector, RemotePublishSort, LocalSubscribeSort and Limit are', runselector, pubsort, subsort, limit)
    //console.log('Count', data.length)

    const sendData = () => {
      onData(null, {
        data,
        sidebarStore: sidebarReducer,
        error,
      })
      // clearErrors when unmounting the component
      return err ? err().clearErrors : null
    }

    sendData()
    return Store.subscribe(sendData)
  }
}

export default (actionset, component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps(actionset)
)(component)
