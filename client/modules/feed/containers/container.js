import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import { taskspending } from '/lib/collections/collections'

Subscriptions = new SubsManager()

const collectionComposer = ({ context, actions }, onData) => {
  const { Meteor, Collections, Store, LocalState } = context()
  const { sidebarReducer } = Store.getState()

  const { feed, inbox, projectinbox, subinbox, subprojectinbox, contextinbox, calendar, overdue, previouscalendar, sidebar, currentprojorcont, filterprojects } = actions()

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
    data.subinbox = queryize(subinbox)
    data.subprojectinbox = queryize(subprojectinbox)
    data.contextinbox = queryize(contextinbox)
    data.calendar = queryize(calendar)
    data.overdue = queryize(overdue)
    data.previouscalendar = queryize(previouscalendar)
    data.sidebar = queryize(sidebar)
//    data.sidebar.inboxflags = data.sidebar.map( sb => taskspending.findOne({ project: sb._id, workflow: "/tw-ui/2.selectingproject"}) )
    data.sidebar.inboxflags = data.sidebar.map( sb => taskspending.findOne({workflow: "/tw-ui/2.selectingproject", project: sb._id}) ? sb._id : '' )
    console.log("data.sidebar.inboxflags", data.sidebar.inboxflags)
    data.sidebar.currentprojorcont = queryize(currentprojorcont)
    data.sidebar.inboxflag = (data.inbox.length == 0) ? 0 : 1
    //console.log("data.inbox", data.inbox.length)
    var projectsfilter = queryize(filterprojects)
    data.feed.filterprojects = projectsfilter
    data.inbox.filterprojects = projectsfilter
    data.projectinbox.filterprojects = projectsfilter
    data.subinbox.filterprojects = projectsfilter
    data.subprojectinbox.filterprojects = projectsfilter
    data.contextinbox.filterprojects = projectsfilter
    data.previouscalendar.filterprojects = projectsfilter
    data.overdue.filterprojects = projectsfilter
    data.calendar.filterprojects = projectsfilter

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
