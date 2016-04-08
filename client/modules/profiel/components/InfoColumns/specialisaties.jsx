import React from 'react'
//import './style.css'
const SpecialisatiesColumn = ({specialisaties}) => (
  <div className="info-column-item info-column-item__specialisaties">
    <div className=" f4 black-80 info-column-item__title">
      Specialisaties
    </div>
    <div className=" f5 black-70 info-column-item__body">
      {
        specialisaties.map((speci, index) => (
          <div key={`specialisme-index-$-${index}`}>
            {speci}
          </div>
        ))
      }
    </div>
  </div>
)
export default SpecialisatiesColumn
