import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function({Collections, Meteor, LocalState}) {
    console.log('method stubs: home');

    Meteor.methods({
        'home.create.timer'(duration) {
            check(duration, Number);
            let time = 0;

            const createdAt = new Date();
            time = (duration)*1000;
            const counting = false;
            const owner = Meteor.userId();
            const timer = {duration, time, owner, counting, createdAt};
            const id = Timer.insert(timer);
            return id;
        }
    });
}
