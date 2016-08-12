// feed should be the one main reducer / actions set

import data from './1data'
import inbox from './inbox'
import projectinbox from './projectinbox'
import subinbox from './subinbox'
import subprojectinbox from './subprojectinbox'
import contextinbox from './contextinbox'
import feed from './feed'
import calendar from './calendar'
import previouscalendar from './previouscalendar'
import sidebar from './sidebar'
import projorcont from './projorcont'
import parentprojectorcontext from './parentprojectorcontext'
import filterprojects from './filterprojects'
import overdue from './overdue'
import projectselector from './projectselector'
import currentprojorcont from './currentprojorcont'
import backoneworkflow from './backoneworkflow'
import timepicker from './timepicker'
import trashbutton from './trashbutton'
import archivebutton from './archivebutton'
import somedaymaybebutton from './somedaymaybebutton'
import loadmorebutton from './loadmorebutton'
import createtask from './createtask'

const actions = {
  data,
  inbox,
  projectinbox,
  subinbox,
  subprojectinbox,
  contextinbox,
  feed,
  calendar,
  previouscalendar,
  sidebar,
  projorcont,
  parentprojectorcontext,
  filterprojects,
  overdue,
  projectselector,
  currentprojorcont,
  backoneworkflow,
  timepicker,
  trashbutton,
  archivebutton,
  somedaymaybebutton,
  loadmorebutton,
  createtask,
}

export default actions


