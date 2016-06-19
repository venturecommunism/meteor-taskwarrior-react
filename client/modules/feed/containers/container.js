import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

Subscriptions = new SubsManager()

const collectionComposer = ({ context, actions }, onData) => {
  const { Meteor, Collections, Store, LocalState } = context()
  const { sidebarReducer } = Store.getState()

  const { feed, inbox, projectinbox, contextinbox, calendar, overdue, previouscalendar, sidebar, currentprojorcont, filterprojects } = actions()

  const { queries } = actions().data.query()

  queries.forEach(function (query) {
    query.query.selector = query.query.selector()
  })

  //const error = err ? LocalState.get(err().errortype) : null

  if (Subscriptions.subscribe('feed', queries).ready()) {
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
          //error,
      })
      // clearErrors when unmounting the component
      // return err ? err().clearErrors : null
    }

    sendData()
    return Store.subscribe(sendData)
  }
}

export default (component) => composeAll(
  composeWithTracker(collectionComposer),
  useDeps()
)(component)
