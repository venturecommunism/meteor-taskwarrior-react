import React from 'react' //eslint-disable-line no-unused vars

const SidemenuProfile = ({url, name }) => (
  <div className="sidemenu-profile">
    <div className="sidemenu-profile__avatar">
      <img src={url} alt=""/>
    </div>
    <div className="sidemenu-profile__name f2 white-80">
      { name }
    </div>
  </div>
)
SidemenuProfile.defaultProps = {
  url: 'http://static.topixcdn.com/pics/user_avatar_empty.png',
  name: 'Test gebruiker'
}

export default SidemenuProfile
