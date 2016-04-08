import React from 'react'
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'

//require('./styles.css')


const DropdownButton = ({ folderName, id, makeFavorite }) => {
  const handleSelection= (value, e) => {
    if (value === 'maak favoriet') {
      makeFavorite(folderName, id, 'folder')
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
      </Menu>
    </Wrapper>
  )
}

export default DropdownButton