import React from 'react'
//import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
//import { Meteor } from 'meteor/meteor'

import Layout from '../../_layout/components/layout.jsx'


export default (injectDeps) => {

    const LayoutCtx = injectDeps(Layout)

    FlowRouter.route('/', {
        names: 'hub.newsfeed',

        action() {
            mount(LayoutCtx, {
                main_content: () => (<h1>LOL HOME</h1>),
                sidebar_content: () => (<h3>SIDEBAR</h3> )
            })
        }
    })
}