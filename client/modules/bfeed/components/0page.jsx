import React from 'react';

import Container from '../../core/containers/container'
import Main from './main.jsx'

const RootDataContainer = Container('main', Main)

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <RootDataContainer />
      </div>
    );
  }
}
