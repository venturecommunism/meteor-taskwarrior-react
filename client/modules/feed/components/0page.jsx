import React from 'react';

import Container from '../containers/container'

import Data from './1data.jsx'
const DataContainer = Container(Data)

export default ({...queryParams}) => (
  <div className="bs-docs-section clearfix">
    <DataContainer {...queryParams} />
  </div>
)
