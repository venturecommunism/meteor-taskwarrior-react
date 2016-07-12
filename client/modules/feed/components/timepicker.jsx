import React from 'react'

import 'react-date-picker/index.css'
import { DateField, TransitionView, Calendar } from 'react-date-picker'

export default ({actions, id, due, ...date, format}) => {
  return <div>{due}{/* {(dateString, { dateMoment, timestamp}) => { actions.onChange.bind(this, null, id, dateString)}} */}<DateField
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
  </DateField>
</div>
}
