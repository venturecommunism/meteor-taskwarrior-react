import React from 'react'
//import './style.css'
const AdressenColumn = ({adressen}) => (
  <div className="info-column-item info-column-item__contact">
    <div className="f4 black-80 tracked info-column-item__title">
      Adressen
    </div>
    <div className="f5 black-70 info-column-item__body">
      {
        adressen.map((adres, index) => (
          <div key={`adres-index-$-${index}`}>
            {adres}
          </div>
        ))
      }
    </div>
  </div>
)
export default AdressenColumn
