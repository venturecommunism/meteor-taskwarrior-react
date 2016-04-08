export default {
    gotoRoute({ LocalState, FlowRouter }, name) {
        LocalState.set('CURRENT_ROUTE', name)

        //override home to "/"
        if (name === 'home') name = '';

        FlowRouter.go('/' + name)
    }
}