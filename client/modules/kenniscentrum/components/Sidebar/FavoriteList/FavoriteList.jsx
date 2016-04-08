import React from 'react'
import FavoriteListFileItem from './FavoriteListFileItem.jsx'
import FavoriteListFolderItem from './FavoriteListFolderItem.jsx'

//import styles from './styles.css'

const FavoriteList = ({favorites}) => (
  <div className="favorites--container mtl black-60">
    <div className="pbs w-100 pls f4 mbm ttu tracked">
      Mijn favorieten
    </div>
    <div className="favorite-kc-list list-group">
      {
        favorites.map((fav, index) => {
          {
            return (
              fav.fileType !== undefined ?
                <FavoriteListFileItem
                  key={'favorite-item$-' + index }
                  name={fav.fileName}/>
                :
                <FavoriteListFolderItem
                  key={'favorite-item$-' + index }
                  name={fav.folderName }/>
            )
          }

        })
      }
    </div>
  </div>
)

export default FavoriteList
