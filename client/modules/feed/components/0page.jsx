import React from 'react';

import Container from '../containers/container'

import Data from './1data.jsx'
const DataContainer = Container('data', Data)

export default ({...queryParams}) => (
  <div className="bs-docs-section clearfix">
    <DataContainer {...queryParams} />
  </div>
)
