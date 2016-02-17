import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../../_home/components/links.jsx';
//import Simple from '../components/simple.jsx';
//import Homepage from '../components/homepageWrapper.jsx';
import FeedContainer from '../containers/FeedContainer'
import TestJSX from '../components/TestJSX.jsx'

export default (injectDeps) => {

  const LayoutCtx = injectDeps(Layout);
  // const LayoutCtx = injectDeps(context, actions)(Layout)

  FlowRouter.route('/feed', {
    name: 'Feed',
    action() {
      mount(LayoutCtx, {
        content: () => (<FeedContainer />),
        links: () => (<Links />)
      });
    }
  });


};
