Subscriptions = new SubsManager()

import feed from '../../bfeed/actions/feed'
import sidebar from '../../bfeed/actions/sidebar'
import calendar from '../../bfeed/actions/calendar'
import overdue from '../../bfeed/actions/overdue'
import previouscalendar from '../../bfeed/actions/previouscalendar'
import filterprojects from '../../bfeed/actions/filterprojects'
import currentprojorcont from '../../bfeed/actions/currentprojorcont'

import { composeWithTracker, composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/usedeps'

const collectionComposer = ({ context, query, err }, onData) => {
  const { Meteor, Collections, Store, LocalState } = context()
  const { sidebarReducer } = Store.getState()

  const error = err ? LocalState.get(err().errortype) : null

  const { queries } = query()

  queries.forEach(function (query) {
    query.query.selector = query.query.selector()
  })

  if (Subscriptions.subscribe('newfeed', queries).ready()) {
    const data = {}

    var feedsubcollection = feed.query().collection
    var feedsubconnection = feed.query().subconnection
    var feedsubselector = feed.query().selector
    var feedrunsubselector = feedsubselector()
    var feedsubsubsort = feed.query().subsort
    data.feed = Mongo.Collection.get(feedsubcollection, { connection: feedsubconnection }).find(feedrunsubselector, {sort: feedsubsubsort}).fetch()
    //if (data.feed) { sweetAlert("feed exists") }

    var calendarsubcollection = calendar.query().collection
    var calendarsubconnection = calendar.query().subconnection
    var calendarsubselector = calendar.query().selector
    var calendarrunsubselector = calendarsubselector()
    var calendarsubsubsort = calendar.query().subsort
    var calendarlimit = calendar.query().limit
    data.calendar = Mongo.Collection.get(calendarsubcollection, { connection: calendarsubconnection }).find(calendarrunsubselector, {sort: calendarsubsubsort, limit: calendarlimit}).fetch()
    //if (data.calendar) { sweetAlert("calendar exists") }

    var overduesubcollection = overdue.query().collection
    var overduesubconnection = overdue.query().subconnection
    var overduesubselector = overdue.query().selector
    var overduerunsubselector = overduesubselector()
    var overduesubsubsort = overdue.query().subsort
    var overduelimit = overdue.query().limit
    data.overdue = Mongo.Collection.get(overduesubcollection, { connection: overduesubconnection }).find(overduerunsubselector, {sort: overduesubsubsort, limit: overduelimit}).fetch()
    //if (data.overdue) { sweetAlert("overdue exists") }

    var previouscalendarsubcollection = previouscalendar.query().collection
    var previouscalendarsubconnection = previouscalendar.query().subconnection
    var previouscalendarsubselector = previouscalendar.query().selector
    var previouscalendarrunsubselector = previouscalendarsubselector()
    var previouscalendarsubsubsort = previouscalendar.query().subsort
    var previouscalendarlimit = previouscalendar.query().limit
    data.previouscalendar = Mongo.Collection.get(previouscalendarsubcollection, { connection: previouscalendarsubconnection }).find(previouscalendarrunsubselector, {sort: previouscalendarsubsubsort, limit: previouscalendarlimit}).fetch()
    //if (data.previouscalendar) { sweetAlert("previous exists") }

    var sidebarsubcollection = sidebar.query().collection
    var sidebarsubconnection = sidebar.query().subconnection
    var sidebarsubselector = sidebar.query().selector
    var sidebarrunsubselector = sidebarsubselector()
    var sidebarsubsubsort = sidebar.query().subsort
    data.sidebar = Mongo.Collection.get(sidebarsubcollection, { connection: sidebarsubconnection }).find(sidebarrunsubselector, {sort: sidebarsubsubsort}).fetch()
    //if (data.sidebar) { sweetAlert("side exists") }

    var currsubcollection = currentprojorcont.query().collection
    var currsubconnection = currentprojorcont.query().connection
    var currsubselector = currentprojorcont.query().selector
    var currrunsubselector = currsubselector()
    var currsubsubsort = currentprojorcont.query().subsort
    data.sidebar.currentprojorcont = Mongo.Collection.get(currsubcollection, { connection: currsubconnection }).find(currrunsubselector, {sort: currsubsubsort}).fetch()
    //if (data.sidebar.currentprojorcont) { sweetAlert("currprojcont exists") }

    var subcollection = filterprojects.query().collection
    var subconnection = filterprojects.query().subconnection
    var subselector = filterprojects.query().selector
    var runsubselector = subselector()
    var subsubsort = filterprojects.query().subsort
    
    data.feed.filterprojects = Mongo.Collection.get(subcollection, { connection: subconnection }).find(runsubselector, {sort: subsubsort}).fetch()
    data.previouscalendar.filterprojects = []
    data.overdue.filterprojects = []
    data.calendar.filterprojects = []

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
