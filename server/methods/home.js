import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

    Meteor.methods({
        'home.create.timer'(duration) {
            console.log("home.create.timer")
            check(duration, Number);
            let time = 0;

            const createdAt = new Date();
            time = (duration)*1000;

            const counting = false;
            const owner = Meteor.userId();
            const newTimer = {duration, time, owner, counting, createdAt};
            return Timer.insert(newTimer);
        }
    })
