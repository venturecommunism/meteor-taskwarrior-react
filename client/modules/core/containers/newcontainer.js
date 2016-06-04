import feed from '../../bfeed/actions/feed'
import sidebar from '../../bfeed/actions/sidebar'
import calendar from '../../bfeed/actions/calendar'
import overdue from '../../bfeed/actions/overdue'
import previouscalendar from '../../bfeed/actions/previouscalendar'
import filterprojects from '../../bfeed/actions/filterprojects'

import { composeWithTracker, composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/usedeps'

const collectionComposer = ({ context, query, err }, onData) => {
  const { Meteor, Collections, Store, LocalState } = context()
  const { sidebarReducer } = Store.getState()

  const error = err ? LocalState.get(err().errortype) : null

//  const { connection, collection, selector, pubsort, subsort, limit } = query()
  const { queries } = query()
//  var runselector = selector()

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

console.log("queries", queries)

queries.forEach(function (query) {
console.log(query)
query.query.selector = query.query.selector()
//  queries.queries.query.selector = query.selector()
})

  if (Meteor.subscribe('newfeed', queries).ready()) {
console.log("yo")
//    const data = Mongo.Collection.get(collection, { connection: connection }).find(runselector, {sort: subsort, reactive: false}).fetch()
    const data = {}

    console.log("data", data)

    var feedsubcollection = feed.query().collection
    var feedsubconnection = feed.query().subconnection
    var feedsubselector = feed.query().selector
    var feedrunsubselector = feedsubselector()
    var feedsubsubsort = feed.query().subsort
    data.feed = Mongo.Collection.get(feedsubcollection, { connection: feedsubconnection }).find(feedrunsubselector, {sort: feedsubsubsort}).fetch()

    var calendarsubcollection = calendar.query().collection
    var calendarsubconnection = calendar.query().subconnection
    var calendarsubselector = calendar.query().selector
    var calendarrunsubselector = calendarsubselector()
    var calendarsubsubsort = calendar.query().subsort
    data.calendar = Mongo.Collection.get(calendarsubcollection, { connection: calendarsubconnection }).find(calendarrunsubselector, {sort: calendarsubsubsort}).fetch()

    var overduesubcollection = overdue.query().collection
    var overduesubconnection = overdue.query().subconnection
    var overduesubselector = overdue.query().selector
    var overduerunsubselector = overduesubselector()
    var overduesubsubsort = overdue.query().subsort
    data.overdue = Mongo.Collection.get(overduesubcollection, { connection: overduesubconnection }).find(overduerunsubselector, {sort: overduesubsubsort}).fetch()

    var previouscalendarsubcollection = previouscalendar.query().collection
    var previouscalendarsubconnection = previouscalendar.query().subconnection
    var previouscalendarsubselector = previouscalendar.query().selector
    var previouscalendarrunsubselector = previouscalendarsubselector()
    var previouscalendarsubsubsort = previouscalendar.query().subsort
    data.previouscalendar = Mongo.Collection.get(previouscalendarsubcollection, { connection: previouscalendarsubconnection }).find(previouscalendarrunsubselector, {sort: previouscalendarsubsubsort}).fetch()

    var sidebarsubcollection = sidebar.query().collection
    var sidebarsubconnection = sidebar.query().subconnection
    var sidebarsubselector = sidebar.query().selector
    var sidebarrunsubselector = sidebarsubselector()
    var sidebarsubsubsort = sidebar.query().subsort
    data.sidebar = Mongo.Collection.get(sidebarsubcollection, { connection: sidebarsubconnection }).find(sidebarrunsubselector, {sort: sidebarsubsubsort}).fetch()

    var subcollection = filterprojects.query().collection
console.log(subcollection)
    var subconnection = filterprojects.query().subconnection
    var subselector = filterprojects.query().selector
    var runsubselector = subselector()
    var subsubsort = filterprojects.query().subsort
    data.feed.filterprojects = Mongo.Collection.get(subcollection, { connection: subconnection }).find(runsubselector, {sort: subsubsort}).fetch()
data.previouscalendar.filterprojects = data.feed.filterprojects
data.overdue.filterprojects = data.feed.filterprojects
console.log("data.feed", data.feed)
console.log("data.feed.filterprojects", data.feed.filterprojects)


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
