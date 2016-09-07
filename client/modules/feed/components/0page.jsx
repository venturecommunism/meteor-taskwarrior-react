import React from 'react'

import Container from '../containers/container'

import Data from './1data.jsx'
const DataContainer = Container(Data)

import { compose } from 'react-komposer'

// test 

// Create a component to display Time
const Time = ({queryParams, time}) => (
	<div>
<p></p>
<p></p>
<p></p>
<p></p>
{time}
<DataContainer {...queryParams} />
  </div>
)

// Create the composer function and tell how to fetch data
const composerFunction = (props, onData) => {

  const now = () => (
    props.timestamp ? Date.now() : new Date().toString()
  )
	
  const handler = setInterval(() => {
    const time = now()
    onData(null, {time})
  }, 100)
  
  const cleanup = () => clearInterval(handler)
  return cleanup
}

// Compose the container
const Clock = compose(composerFunction)(Time)

// test 

const App = ({queryParams}) => (
  <div className="clearfix">
    <DataContainer {...queryParams} />
  </div>
)

export default Clock
