import React from 'react'
//import styles from './styles.css'
class TableHeader extends React.Component {
  render() {
    return (
      <div className="tableheader-container">
        <div className="tableheader-inner tableheader-inner--contacten">
          <div className="tableheader-contacten__icon black-60 f5 tracked header-height">
          </div>
          <div className="tableheader tableheader-contacten__name black-60 f5 tracked header-height">
            Naam
          </div>
          <div className="tableheader tableheader-contacten__discipline black-60 f5 tracked header-height">
            Discipline
          </div>
          <div className="tableheader tableheader-contacten__emc black-60 f5 tracked header-height">
            EMC
          </div>
        </div>
      </div>
    )
  }
}
export default TableHeader
