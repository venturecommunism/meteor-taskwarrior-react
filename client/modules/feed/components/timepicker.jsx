import React from 'react'

import 'react-date-picker/index.css'
import { DateField, TransitionView, Calendar } from 'react-date-picker'

export default ({actions, due, ...date, format}) => {
  return <div>{due}<DateField
    forceValidDate
    value={due ? due : moment().format(format) }
    dateFormat={format}
    updateOnDateClick={true}
    onChange={actions.onChange.bind(this)}
  >
    <TransitionView>
      <Calendar 
        style={{padding: 10}}
        onChange={actions.onChange.bind(this)}
      />
    </TransitionView>
  </DateField>
</div>
}
