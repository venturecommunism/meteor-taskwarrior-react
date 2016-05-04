import users from './users'
import tasks from './tasks'
import home from '/lib/methods/home'
import timer from './timer'

export default function () {
  users()
  tasks()
  home()
  timer()
}
