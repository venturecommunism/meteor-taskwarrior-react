import {Timer} from '/lib/collections/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

    Meteor.publish('all.timers', () => {
        const selector = {};
        const options = {
            fields: { _id: 1, type: 1, time: 1 },
            sort: { createdAt: -1 }
        };

        return Timer.find(selector, options);
    });

    Meteor.publish('single.timer', (timerId) => {
        check(timerId, String);
        const selector = { _id: timerId };

        return Timer.find(selector);
    })
