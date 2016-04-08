import React from 'react'
import MDSearch from 'react-icons/lib/md/search'
import MDClose from 'react-icons/lib/md/close'

class FileExplorerSearchbar extends React.Component {
  render() {
    return (
      <div className="searchbar-container">
        <div className="searchbar-input-logo searchbar-input-logo__search">
          <MDSearch />
        </div>
        <input
          className="searchbar-input pas f4 semibold black-70"
          type="text"
          disabled={true}
          placeholder="Zoek in bestanden..."></input>
        <div
          className="searchbar-input-logo f5 searchbar-input-logo__close plm prm">
          <span className="hidden">reset</span>
        </div>
      </div>
    )
  }
}
export default FileExplorerSearchbar
