import React from 'react'
import MDFolder from 'react-icons/lib/md/folder'
import TimeAgo from 'react-timeago'
import DropDownButton from './FileListMapDropdownItem.jsx'

const ContentListMapItem = ({ folderName, createdAt, id, gotoFolder, makeFavorite, folderContentsRequest }) => {
  return (
    <div className="content-list-item-outer">

      <div className="content-list-item-inner pbm ptm"
           onClick={  gotoFolder.bind(null, id) }>
        <div className="tableheader--icon folder__icon f3">
          <MDFolder/>
        </div>
        <div className="tableheader--name black-70 f4 tracked">
          { folderName }
        </div>
        <div className="tableheader--date black-50 f5 tracked">
          <TimeAgo date={createdAt}/>
        </div>
      </div>
      <div className="content-list-item-button">
        <div className="content-list-item_centered-items content-list-item__button f5 black-20 tracked">
          <DropDownButton
            makeFavorite={makeFavorite}
            folderName={folderName}
            id={id}/>
        </div>
      </div>
    </div>
  )
}
export default ContentListMapItem

