import React from 'react';

import Container from '../containers/container'

import Data from './1data.jsx'
const DataContainer = Container(Data)

const App = ({queryParams}) => (
      <div className="bs-docs-section clearfix">
        <p>pnrrrg</p>
        {/* <DataContainer {...queryParams} /> */}
      </div>
    )


export default App

