import React from 'react'
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'

//require('./styles.css')


const DropdownButton = ({ makeContactFavorite }) => {
  return (
    <Wrapper
      className='AriaMenuButton plm prm pts pbs'
      onSelection={makeContactFavorite}>
      <Button className='AriaMenuButton-trigger pts pbs plm prm '>
        opties
      </Button>
      <Menu className='AriaMenuButton-menu'>
        <MenuItem className='AriaMenuButton-menuItem AriaMenuButton-menuItemWrapper pam'>
          favoriet
        </MenuItem>
      </Menu>
    </Wrapper>
  )
}

export default DropdownButton
