import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function({Collections, Meteor, LocalState}) {
    console.log('method stubs: home');

    Meteor.methods({
        'home.create.timer'(type) {
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
            const timer = {type, time, owner, counting, createdAt};
            const id = Timer.insert(timer);
            return id;
        }
    });
}
