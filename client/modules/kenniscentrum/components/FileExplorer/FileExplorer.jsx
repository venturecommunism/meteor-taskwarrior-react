import React from 'react'
import Overlay from '../../../_layout/components/Overlay/overlay.jsx'
import CreateMap from '../create_map/create_map.jsx'
import UploadFile from '../upload_file/uploadFile.jsx'
import ContentList from './contentList.jsx'
import CurrentFolderName from './currentFolderName.jsx'
import TableHeader from './tableHeader.jsx'

//import styles from './styles.css'

class FileExplorer extends React.Component {
  constructor() {
    super()
    this.state = {
      folderName: '',
      value: [],
      file: [],
      fileName: '',
      notification: {
        isActive: true
      }
    }

    this.handleCreateFolder = this.handleCreateFolder.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
  }

  componentDidMount() {
    //const { folderId } = this.props;
    //this.props.loadFolderContents(folderId)
    //this.props.folderContentsRequest(folderId)
  }

  /* Niet heel mooi, maar werkt goed genoeg. Is nodig om goed te kunnen werken
   met back/forward in browser etc. Prop folderId komt van FlowRouter
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.folderId !== this.props.folderId && this.props.folders.length > 0) {
      this.props.loadFolderContents(nextProps.folderId)
    }
    if (this.props.subscriptionLoaded == false && nextProps.subscriptionLoaded == true) {
      const { folderId } = this.props;
      this.props.loadFolderContents(folderId)
    }
  }

  handleCreateFolder() {
    const { folderName, value } = this.state
    const allowedUsers = value.map((user) => {
      return user.value
    })
    this.props.createFolder(folderName, allowedUsers, 'home')
  }

  handleFileUpload() {
    console.log(this.state)
    const fileToUpload = this.state.file[0]
    this.props.uploadToS3(fileToUpload)
  }


  handleClick() {
    console.log('hello')
    this.props.loadFolderContents('home')
  }

  render() {
    const { toggleOverlay, isOverlayOpen, listUsers, uploadToS3, makeFavorite, isLoadingFolderContents, downloadFile, createFolder, usersList, gotoFolder, loadFile, folderContentsRequest, isCreatingFolder, subscriptionLoaded} = this.props
    const { currentFolderData, currentFolderName, loadContentRequest } = this.props.kenniscentrumStore
    const { overlayIsOpened, typeOfOverlay } = this.props.layoutStore
    const { folderName, value, fileName } = this.state
    return (
      <div className="file-explorer-container">

        <CurrentFolderName name={currentFolderName} />
        <TableHeader />
        <ContentList
          isLoading={ !subscriptionLoaded }
          gotoFolder={gotoFolder}
          loadFile={loadFile}
          downloadFile={downloadFile}
          makeFavorite={makeFavorite}
          folderContentsRequest={folderContentsRequest}
          folderContents={currentFolderData}/>
        {
          typeOfOverlay === 'folder' ?
            <Overlay toggleOverlay={toggleOverlay}
                     buttonText={'maak aan'}
                     isLoading={isCreatingFolder}
                     isOverlayOpen={overlayIsOpened}
                     overlayTitle={'nieuwe map aanmaken'}
                     onPositive={ this.handleCreateFolder }>

              <CreateMap listUsers={listUsers}
                         usersList={usersList}
                         folderName={folderName}
                         selectedUsers={value}
                         onFolderChange={ (e) => { this.setState({folderName: e.target.value})} }
                         onPersonChange={ (value) => { this.setState({value})}}
                         createFolder={createFolder}/>
            </Overlay> :
            <Overlay toggleOverlay={toggleOverlay}
                     buttonText={'upload'}
                     isLoading={isCreatingFolder}
                     isOverlayOpen={overlayIsOpened}
                     overlayTitle={'bestand uploaden'}
                     onPositive={ this.handleFileUpload }>
              <UploadFile
                onDrop={ (file) => { this.setState({file, fileName: file[0].name}) } }
                onFileNameChange={ (e) => this.setState({fileName: e.target.value}) }
                fileName={fileName}
              />
            </Overlay>
        }
      </div>
    )
  }
}
FileExplorer.defaultProps = {
  currentFolder: 'home'
}

export default FileExplorer

