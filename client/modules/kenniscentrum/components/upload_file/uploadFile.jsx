import React from 'react'
import Dropzone from 'react-dropzone'
class UploadFile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            fileName: ''
        }
        this.onDrop = this.onDrop.bind(this)
        this.onOpenClick = this.onOpenClick.bind(this)
    }

    onDrop(files) {
        console.log('received files', files)
        this.setState({
            files,
            fileName: files[0].name
        })
    }

    onOpenClick() {
        this.refs.dropzone.open()
    }

    render() {
      const { fileName, onDrop, onFileNameChange } = this.props
        return (
          <div className="modal-body mtl mal">
                <label className="f4 tracked black-50">
                    Bestandsnaam
                </label>
                <input name="foldername"
                       type="text"
                       onChange={onFileNameChange}
                       value={fileName}
                       className="modal-body--input mts-l f3 black-60 semibold w-100 plm pvs db ba"></input>
                <Dropzone
                    ref="dropzone"
                    multiple={false}
                    className="file-dropzone w-80 center mtl mbl pal-l bg-near-white black-70 bg-hover-light-gray"
                    onDrop={onDrop}>
                    <div className="f3-m">
                       Klik hier om uw bestand up te loaden. U kunt ze ook hierheen slepen.
                    </div>
                </Dropzone>
            </div>
        )
    }
}

export default UploadFile