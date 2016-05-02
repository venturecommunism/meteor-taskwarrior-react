export default {
    create({Meteor, LocalState, FlowRouter}, duration) {
        if(!duration) return LocalState.set('CREATE_TIMER_ERROR', 'Duration is required');

        LocalState.set('CREATE_TIMER_ERROR', null);
        Meteor.call('home.create.timer', duration, (err, result) => {
            if(err) return LocalState.set('CREATE_TIMER_ERROR', err.message);
            FlowRouter.go(`/timer/${result}`);
        });
    },
}
