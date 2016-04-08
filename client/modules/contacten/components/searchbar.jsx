import React from 'react'
//import throttle from 'lodash.throttle'
import MDSearch from 'react-icons/lib/md/search'
import MDClose from 'react-icons/lib/md/close'

//import styles from './styles.css'

class Searchbar extends React.Component {
   render() {
     const { isSearching, searchActive, resetUserSearch } = this.props
     return (
       <div className="searchbar-container">
         <div className="searchbar-input-logo searchbar-input-logo__search">
           <MDSearch />
         </div>
         <input
           onChange={this.handleChange}
           value={this.state.searchValue}
           className="searchbar-input pas f4 semibold black-70"
           type="text"
           placeholder="Zoek in contacten..."></input>
         {
           !searchActive ?
             <div
               className="searchbar-input-logo f5 searchbar-input-logo__close plm prm">
               <span className="hidden">reset</span>
             </div> :
             <div
               onClick={this.handleReset}
               className="searchbar-input-logo f5 searchbar-input-logo__close searchbar-input-logo__close--active plm prm">
               reset
             </div>
 
         }
       </div>
     )
   }

}
export default Searchbar
