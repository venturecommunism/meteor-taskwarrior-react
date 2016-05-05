import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import {Layout} from '/client/configs/theme.jsx'
import Links from '../_home/components/links.jsx'

import Home from '../timer/containers/Home.js'
import Timer from '../timer/containers/Timer.js'

import TimerTemplate from './components/TimerTemplate.jsx'

export default (injectDeps) => {
  const LayoutCtx = injectDeps(Layout)

  FlowRouter.route('/pomodoro', {
    name: 'timer.index',
    action() {
      mount(LayoutCtx, {
        content: () => (<Home />),
        links: () => (<Links />)
      })
    }
  })

    FlowRouter.route('/timer/:timerId', {
        name: 'timer.id',
        action(timerId) {
//            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(LayoutCtx, {
                content: () => (<Timer timerId={timerId} />)
            });
        }
    });

    FlowRouter.route('/timert/:timerId', {
        name: 'timert.id',
        action(timerId) {
            if(!Meteor.user()) return FlowRouter.go('/login');

            mount(LayoutCtx, {
                content: () => (<TimerTemplate timerId={timerId} />)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'users.new',
        action() {
            mount(LayoutCtx, {
                content: () => (<NewUser />)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'users.login',
        action() {
            mount(LayoutCtx, {
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
