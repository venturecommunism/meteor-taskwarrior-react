import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import {Layout} from '/client/configs/theme.jsx'
import Links from '../../_home/components/links.jsx'

import Feed from '../components/feed.jsx'

export default (injectDeps) => {
  const LayoutCtx = injectDeps(Layout)

  FlowRouter.route('/feed', {
    name: 'feed',
    action() {
      mount(LayoutCtx, {
        content: () => (<Feed />),
        links: () => (<Links />)
      })
    }
  })
}
