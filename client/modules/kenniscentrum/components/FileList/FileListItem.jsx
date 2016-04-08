import React from 'react'
import MDFile from 'react-icons/lib/md/insert-drive-file'
import TimeAgo from 'react-timeago'
import DropDownButton from './FileListDropdownItem.jsx'

const ContentListFileItem = ({ fileName, makeFavorite, downloadFile, createdAt, id, loadFile, fileURL }) => {
  return (
    <div className="content-list-item-outer">
      <div className="content-list-item-inner pbm ptm"
           onClick={  loadFile.bind(null, id) }>
        <div className="tableheader--icon lightest-blue f3">
          <MDFile />
        </div>
        <div className="tableheader--name black-70 f4 tracked">
          { fileName }
        </div>
        <div className="tableheader--date black-50 f5 tracked">
          <TimeAgo date={createdAt}/>
        </div>
        </div>
        <div className="content-list-item-button">
          <div className="content-list-item_centered-items content-list-item__button f5 black-20 tracked">
            <DropDownButton
              makeFavorite={makeFavorite}
              downloadFile={downloadFile}
              fileName={fileName}
              id={id}
              fileURL={fileURL}/>
          </div>
        </div>
      </div>
  )
}
export default ContentListFileItem