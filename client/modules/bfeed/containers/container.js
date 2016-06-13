Subscriptions = new SubsManager()

import feed from '../../bfeed/actions/feed'
import sidebar from '../../bfeed/actions/sidebar'
import inbox from '../../bfeed/actions/inbox'
import projectinbox from '../../bfeed/actions/projectinbox'
import contextinbox from '../../bfeed/actions/contextinbox'
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
    data.feed = queryize(feed)
    data.inbox = queryize(inbox)
    data.projectinbox = queryize(projectinbox)
    data.contextinbox = queryize(contextinbox)
    data.calendar = queryize(calendar)
    data.overdue = queryize(overdue)
    data.previouscalendar = queryize(previouscalendar)
    data.sidebar = queryize(sidebar)
    data.sidebar.currentprojorcont = queryize(currentprojorcont)
    data.feed.filterprojects = queryize(filterprojects)
    data.inbox.filterprojects = []
    data.projectinbox.filterprojects = []
    data.contextinbox.filterprojects = []
    data.previouscalendar.filterprojects = []
    data.overdue.filterprojects = []
    data.calendar.filterprojects = []

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
