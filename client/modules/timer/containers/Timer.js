import { Timer } from '/lib/collections/collections'
import TimerComponent from '../components/Timer.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Moment from 'moment';

export const composer = ({context, timerId}, onData) => {
    const {Meteor, Collections} = context();
//    const id = timerId.timerId;
//console.log("typeof", typeof timerId)
var id =  timerId
//console.log("id", id)
    if(Meteor.subscribe('single.timer', id).ready()) {
        const timer = Timer.findOne(id);
//console.log("timer props", timer)
        onData(null, timer);
    } else {
        const timer = Timer.findOne(id);
        if(timer) onData(null, timer);
    }
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(TimerComponent);
