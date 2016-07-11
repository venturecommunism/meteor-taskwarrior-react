import React from 'react'

import 'react-date-picker/index.css'
import { DateField, TransitionView, Calendar } from 'react-date-picker'

const onChange = (dateString, { dateMoment, timestamp }) => {
  console.log(dateString)
  console.log(dateMoment)
  console.log(timestamp)
}

export default ({actions, due, ...date, format}) => {
  return <div>{due}<DateField
    forceValidDate
    defaultValue={due ? dateFormat(due, format) : moment().format(format) }
    value={due ? dateFormat(due, format) : date.moment }
    dateFormat={format}
  >
    <TransitionView>
      <Calendar 
        style={{padding: 10}}
        onChange={onChange}
      />
    </TransitionView>
  </DateField>
</div>
}
