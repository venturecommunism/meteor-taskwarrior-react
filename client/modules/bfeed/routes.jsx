import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import {Layout} from '/client/configs/theme.jsx'
import Links from '../_home/components/links.jsx'

import FeedPage from './components/0page.jsx'

export default (injectDeps) => {
  const LayoutCtx = injectDeps(Layout)

  FlowRouter.route('/bfeed', {
    name: 'feed',
    action(params, queryParams) {
      mount(LayoutCtx, {
        content: () => (<FeedPage {...queryParams} />),
        links: () => (<Links />)
      })
    }
  })
}
