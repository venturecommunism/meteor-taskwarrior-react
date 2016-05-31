// feed should be the one main reducer / actions set

import maincomponent from './maincomponent'
import feed from './feed'
import calendar from './calendar'
import previouscalendar from './previouscalendar'
import sidebar from './sidebar'
import projorcont from './projorcont'
import parentprojectorcontext from './parentprojectorcontext'
import filterprojects from './filterprojects'
import overdue from './overdue'
import projectselector from './projectselector'
import createtask from './createtask'

const actions = {
  maincomponent,
  feed,
  calendar,
  previouscalendar,
  sidebar,
  projorcont,
  parentprojectorcontext,
  filterprojects,
  overdue,
  projectselector,
  createtask,
}

export default actions


