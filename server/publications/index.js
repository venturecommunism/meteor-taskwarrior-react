import feed from './feed'
import timer from './timer'
import users from './users'
import newfeed from './newfeed'

export default function () {
  newfeed()
  users()
  feed()
  timer()
}
