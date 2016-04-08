import {
    useDeps, composeWithTracker, composeAll
} from 'mantra-core'
import Component from '../../components/register/main.jsx'

export const composer = ({ context, clearErrors}, onData) => {
    const { LocalState } = context()
    const error = LocalState.get('REGISTER_ERROR')
    onData(null, { error })

    return clearErrors
}

export const depsMapper = (context, actions) => ({
    register: actions.account.register,
    clearErrors: actions.account.registerErrorClear,
    context: () => context
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Component)

