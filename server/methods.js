import users from './methods/users'
import tasks from './methods/tasks'
import home from './methods/home'
import timer from './methods/timer'

export default function () {
  users()
  tasks()
  home()
  timer()
}
