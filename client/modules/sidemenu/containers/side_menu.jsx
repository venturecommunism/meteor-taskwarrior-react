import {
    useDeps, composeWithTracker, composeAll
} from 'mantra-core'
import Component from '../components/SidemenuList.jsx'

export const composer = ({ context, clearErrors}, onData) => {
    const { LocalState } = context()
    const currentPage = LocalState.get('CURRENT_ROUTE')
    onData(null, { currentPage })

    return clearErrors
}

export const depsMapper = ( context, actions ) => ({
    gotoRoute: actions.menu.gotoRoute,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Component)