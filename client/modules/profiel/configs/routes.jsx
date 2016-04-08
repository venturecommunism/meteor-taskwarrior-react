import React from 'react'
import { mount } from 'react-mounter'
import Layout from '../../_layout/components/layout.jsx'
import ProfielContainter from '../containers/profiel_container'

export default (injectDeps, {FlowRouter}) => {
  const layoutCtx = injectDeps(Layout)
  FlowRouter.route('/profiel/:userId', {
    name: 'profiel.show',
    action(params, queryParams) {
      const { userId } = params

      mount(layoutCtx, {
        main_content: () => (<ProfielContainter userId={userId} />),
        sidebar_content: () => null,
        topbar_content: () => null,
      })
    }
  })
}
