import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function({Collections, Meteor, LocalState}) {
    Meteor.methods({
        'timer.set'(timerId, time) {
            check(timerId, String);
            check(time, Number);

            const timer = Timer.findOne(timerId);
            timer.time = time;

            Timer.update({_id: timerId}, timer);
        }
    });

    Meteor.methods({
        'timer.reset'(timerId) {
            check(timerId, String);
            const timer = Timer.findOne(timerId);
            timer.counting = false;
            delete timer.ended

            timer.time = timer.duration * 1000
            Timer.update({_id: timerId}, timer);
        }
    });

    Meteor.methods({
        'timer.counting'(timerId, counting) {
            check(timerId, String);
            check(counting, Boolean);

            const timer = Timer.findOne(timerId);
            timer.counting = counting;

            Timer.update({_id: timerId}, timer);
        }
    });

    Meteor.methods({
        'timer.end'(timerId) {
            check(timerId, String);
            const timer = Timer.findOne(timerId);
            timer.counting = false;
            timer.ended = true;

            Timer.update({_id: timerId}, timer);
        }
    });

}
