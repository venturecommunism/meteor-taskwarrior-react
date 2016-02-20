import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../../_home/components/links.jsx';
// import Simple from '../../_home/components/simple.jsx';

import TasksList from '../components/collection.jsx';
import TasksView from '../components/single.jsx';
import TasksAdd from '../components/add.jsx';
import TasksEdit from '../components/edit.jsx';

export default (injectDeps) => {

  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/tasks', {
    name: '_tasks.tasksList',
    action() {
      mount(LayoutCtx, {
        // content: () => (<Simple name='tasks.collection' />)
        content: () => (<TasksList />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/tasks/add', {
    name: '_tasks.tasksAdd',
    action() {
      mount(LayoutCtx, {
        // content: () => (<Simple name='tasks.new' />)
        content: () => (<TasksAdd />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/tasks/:_id', {
    name: '_tasks.tasksView',
    action({_id}) {
      mount(LayoutCtx, {
        // content: () => (<Simple name='tasks.single' />)
        content: () => (<TasksView _id={_id}/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/tasks/:_id/edit', {
    name: '_tasks.tasksEdit',
    action({_id}) {
      mount(LayoutCtx, {
        // content: () => (<Simple name='tasks.single' />)
        content: () => (<TasksEdit _id={_id}/>),
        links: () => (<Links />)
      });
    }
  });

};
