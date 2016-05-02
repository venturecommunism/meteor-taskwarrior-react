import React from 'react'
import {mount} from 'react-mounter'

import Layout from './components/MainLayout.jsx'
import Home from '../timer/containers/Home.js'
import Timer from '../timer/containers/Timer.js'

import TimerTemplate from './components/TimerTemplate.jsx'

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);

    FlowRouter.route('/pomodoro', {
        name: 'timer.index',
        action() {
//            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });

    FlowRouter.route('/timer/:timerId', {
        name: 'timer.id',
        action(timerId) {
//            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(MainLayoutCtx, {
                content: () => (<Timer timerId={timerId} />)
            });
        }
    });

    FlowRouter.route('/timert/:timerId', {
        name: 'timert.id',
        action(timerId) {
            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(MainLayoutCtx, {
                content: () => (<TimerTemplate timerId={timerId} />)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'users.new',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<NewUser />)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'users.login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });

    FlowRouter.route('/logout', {
        name: 'users.logout',
        action() {
            Meteor.logout();
            FlowRouter.go('/');
        }
    });
}
