import React from 'react'
//import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
//import { Meteor } from 'meteor/meteor'

import ContainerCenterContentFull from '../../_layout/components/container_center_content_full.jsx'

import Register from '../containers/account/register.jsx'

export default (injectDeps) => {

    const LayoutCtx = injectDeps(ContainerCenterContentFull)

    FlowRouter.route('/registreer', {
        names: 'users.registreer',

        action() {
            mount(LayoutCtx, {
                content: () => (<Register/> )
            })
        }
    })
}