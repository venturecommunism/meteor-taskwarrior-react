import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/Feed.jsx';
import FeedContainer from './containers/FeedContainer'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(FeedContainer);

  FlowRouter.route('/', {
    name: 'Feed',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<FeedContainer />)
      });
    }
  });
}
