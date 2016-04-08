import React from 'react' //eslint-disable-line no-unused vars
//import MDFolder from 'react-icons/lib/md/folder'
const FavoriteListFolderItem = ({ name }) => (
  <div className="favorite-kc-item-inner mbs">
    <div className="favorite-kc-item-logo">
    {/*  <MDFolder/> */}
    </div>
    <div className="favorite-kc-item-name">
      { name }
    </div>
  </div>
)

export default FavoriteListFolderItem
