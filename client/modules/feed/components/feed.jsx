import React from 'react';
import Sidebar from './_sidebar.jsx';
import ParamsExample from './ParamsExample.jsx'
import CreateTaskContainer from '../containers/CreateTaskContainer'

import paramsComposer from '../composers/paramscomposer.jsx'
import dataComposer from '../composers/feed.jsx';
import Component from './_feed.jsx';
const Container = dataComposer(Component);
const ParamsExampleContainer = paramsComposer(dataComposer(ParamsExample))

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <ParamsExampleContainer />
            <Sidebar />
          </div>
          <div className="col-md-9">
            <CreateTaskContainer />
            <Container />
          </div>
        </div>
      </div>
    );
  }
}
