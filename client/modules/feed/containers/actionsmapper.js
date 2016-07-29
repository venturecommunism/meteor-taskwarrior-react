import { composeAll } from 'mantra-core'
import { useDeps } from '/lib/helpers/usedeps'

export default (actionset, component) => composeAll(
  useDeeps(actionset)
)(component)
