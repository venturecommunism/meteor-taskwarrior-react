import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

    Meteor.methods({
        'home.create.timer'(type) {
            console.log("home.create.timer")
            check(type, String);
            let time = 0;

            const createdAt = new Date();
            switch (type) {
                case 'shortbreak':
                    time = (60*5)*1000;
                    break;
                case 'longbreak':
                    time = (60*10)*1000;
                    break;
                default:
                    time = (60*25)*1000;
                    break;
            }

            const counting = false;
            const owner = Meteor.userId();
            const newTimer = { type, time, owner, counting, createdAt };
            return Timer.insert(newTimer);
        }
    })
