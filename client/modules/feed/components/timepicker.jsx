import React from 'react'

import 'react-date-picker/index.css'
import { DateField, TransitionView, Calendar } from 'react-date-picker'

export default ({actions, id, due, ...date, format, state1}) => {
  return <div>{ due || (state1 && state1.indexOf(id) != -1) ? <div><DateField
    forceValidDate
    value={due ? due : moment().format(format) }
    dateFormat={format}
    updateOnDateClick={true}
    onChange={actions.onChange.bind(this, null, id)}
  >
    <TransitionView>
      <Calendar 
        style={{padding: 10}}
        onChange={actions.onChange.bind(this, null, id)}
      />
    </TransitionView>
  </DateField></div> : <div><p>No Calendar</p></div> }
  {!due ? <button onClick={actions.toggleCalendar.bind(this, null, id)}>Toggle Calendar</button> } 
</div>
}
