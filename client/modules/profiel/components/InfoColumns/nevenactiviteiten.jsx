import React from 'react'
//import './style.css'
const NevenActiviteitenColumn = ({ nevenfuncties }) => (
  <div className="f4 black-80 info-column-item info-column-item__contact">
    <div className="info-column-item__title">
      Nevenfuncties
    </div>
    <div className=" f5 black-70 info-column-item__body">
      {
        nevenfuncties.map((nevenfunctie, index) => (
          <div key={`nevenfunctie-index-$-${index}`}>
            {nevenfunctie}
          </div>
        ))
      }
    </div>
  </div>
)
export default NevenActiviteitenColumn
