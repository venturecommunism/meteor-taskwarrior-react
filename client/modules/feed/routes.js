import React from 'react';
import {mount} from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

// Optional, but helpful
import Redbox from 'redbox-react';
const consoleErrorReporter = ({error}) => {
  /*eslint no-console: ["error", { allow: ["error"] }] */
  console.error(error);
  return <Redbox error={error} />;
};
consoleErrorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired
};

// So we can call FlowRotuer again later during hot reload
var localFlowRouter;

export default function (injectDeps, {FlowRouter}) {
  // MainLayoutCtx = injectDeps(MainLayout);
  localFlowRouter = FlowRouter;

  const MainLayoutCtx = function(props) {
    const MainLayout = require('../core/components/main_layout').default;
    const MainLayoutCtx = injectDeps(MainLayout);
    return (
      <AppContainer errorReporter={consoleErrorReporter}>
        <MainLayoutCtx {...props} />
      </AppContainer>
    );
  };

  FlowRouter.route('/', {
    name: 'feed',
    action(params, queryParams) {
      const FeedPage = require('./components/0page.jsx').default;
      mount(MainLayoutCtx, {
        content: () => (<FeedPage queryParams={queryParams} />),
        links: () => {<Links />}
      });
    }
  });
}

if (module.hot) {
  module.hot.accept([
    '../core/components/main_layout',
    './components/0page.jsx',
  ], function () {
    // If any of the above files (or their dependencies) are updated, all we
    // really need to do is re-run the current route's action() method, which
    // will require() the updated modules and re-mount MainLayoutCtx
    // (which itself require()'s the updated MainLayout at render time).
    localFlowRouter._current.route._action(localFlowRouter._current.params);
  });
}

