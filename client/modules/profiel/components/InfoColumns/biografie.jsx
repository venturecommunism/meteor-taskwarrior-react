import React from 'react'
import TextArea from 'react-textarea-autosize'
//import './style.css'
class BioColumn extends React.Component {
  constructor() {
    super()
    this.state = {
      isEditing: true,
      value: '',
      hasChanged: false
    }
  }
  render() {
    const textAreaStyles = {
      border: 'none',
      width: '100%',
      margin: 0,
      padding: 0,
      fontFamily: 'Roboto',
      boxSizing: 'border-box'
    }
    return (
      <div className="info-column-item">
        <div className="f4 black-80 info-column-item__title">
          Biografie
        </div>
        {
          !this.state.isEditing ?
            <div className="f5 black-70 info-column-item__body">
              {this.props.bio}
            </div> :
            <div className="info-column-item__body">
            <TextArea
              style={textAreaStyles}
              onChange={this.handleChange}
              className="f5 black-70 text-area"
              value={this.state.hasChanged ? this.state.value : this.props.bio}></TextArea>
            </div>
        }
      </div>
    )
  }
}

export default BioColumn
