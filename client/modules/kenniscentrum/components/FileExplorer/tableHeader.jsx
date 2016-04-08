import React from 'react'
class TableHeader extends React.Component {
  render() {
    return (
      <div className="tableheader-container">
        <div className="tableheader-inner tableheader-inner--fileexplorer">
          <div className="tableheader--icon black-60 f5 tracked header-height">

          </div>
          <div className="tableheader tableheader--name black-60 f5 tracked header-height">
            naam
          </div>
          <div className="tableheader tableheader--date black-60 f5 tracked header-height">
            upload datum
          </div>
        </div>
      </div>
    )
  }
}
export default TableHeader