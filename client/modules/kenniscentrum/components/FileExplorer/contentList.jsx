import React from 'react'
import MapItem from '../MapList/FileListMapItem.jsx'
import FileItem from '../FileList/FileListItem.jsx'
import NoResults from './no_results.jsx'

const ContentList = ({folderContents, gotoFolder, downloadFile, makeFavorite, isLoading, loadFile, folderContentsRequest}) => {
  return (
    <div className="content-list_container">
      {
        folderContents && !isLoading ?
          folderContents.length > 0 ? folderContents.map((item, index) => {
            if (item.fileType) {
              return (<FileItem loadFile={loadFile}
                                fileType={item.fileType}
                                fileURL={item.fileUrl}
                                downloadFile={downloadFile}
                                fileName={item.fileName} id={item._id}
                                makeFavorite={makeFavorite}
                                createdAt={item.createdAt.toDateString()} key={'file-item-' + index}/>)
            } else {
              return (<MapItem gotoFolder={gotoFolder} folderContentsRequest={folderContentsRequest}
                               folderName={item.folderName}
                               id={item._id}
                               makeFavorite={makeFavorite}
                               createdAt={item.createdAt.toDateString()} key={'folder-item-' + index}/>)
            }
          }) : <NoResults/>
          : <h1 className="black-70 tracked">Data aan het laden..</h1>
      }
    </div>
  )
}

export default ContentList