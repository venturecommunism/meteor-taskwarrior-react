import React from 'react' //eslint-disable-line no-unused vars
//import MDFile from 'react-icons/lib/md/insert-drive-file'
const FavoriteListFileItem = ({ name }) => (
  <div className="favorite-kc-item-inner mbs">
    <div className="favorite-kc-item-logo">
    {/*  <MDFile /> */}
    </div>
    <div className="favorite-kc-item-name">
      { name }
    </div>
  </div>
)
export default FavoriteListFileItem
