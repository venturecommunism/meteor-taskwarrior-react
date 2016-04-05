import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export default (datacomposer, query, component) => composeAll(
  composeWithTracker(datacomposer),
  useDeps(query)
)(component)
