import React from 'react'
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'

//import styles from './styles.css'


const DropdownButton = ({ downloadFile, fileName, id, makeFavorite, fileURL }) => {

  const handleSelection= (value, e) => {
    if (value === 'download') {
      downloadFile(fileURL)
    } else {
      makeFavorite(fileName, id, 'file')
    }
  }

  return (
    <Wrapper
      className='AriaMenuButton plm prm pts pbs'
      onSelection={handleSelection}>
      <Button className='AriaMenuButton-trigger pts pbs plm prm '>
        opties
      </Button>
      <Menu className='AriaMenuButton-menu'>
        <MenuItem className='AriaMenuButton-menuItem AriaMenuButton-menuItemWrapper pam'>
          maak favoriet
        </MenuItem>
        <MenuItem className='AriaMenuButton-menuItem AriaMenuButton-menuItemWrapper pam'>
          download
        </MenuItem>
      </Menu>
    </Wrapper>
  )
}

export default DropdownButton
