export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Email en wachtwoord zijn verplicht')
    }

    LocalState.set('LOGIN_ERROR', null)

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason)
      }

      FlowRouter.go('/contacten')

    })
  },
  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  register({Meteor, LocalState, FlowRouter}, email, password1, password2) {
    console.log('regggging')

    if (!email || !password1 || !password2) {
      return LocalState.set('REGISTER_ERROR', 'Please fill out all the required fileds!');
    }

    if (password1 !== password2) {
      return LocalState.set('REGISTER_ERROR', 'Wachtwoorden zijn niet gelijk');
    }

    const userData = {
      email,
      password: password1,
      profile: {
        firstName: 'Dummy',
        lastName: 'User',
        functie: 'Huisarts',
        image: 'http://static.topixcdn.com/pics/user_avatar_empty.png'
      },
      contact: {
        phone : "(1987) 890033",
        mobile : "9660741846",
        fax : "1599779204",
        email : email,
        website : "maud.com"
      },
      nevenfuncties: [
        "Functie 1",
        "Functie 2"
      ],
      specialisaties: [
        "Specialisatie 1",
        "Specialisatie 2"
      ],
      adressen: [
        "271 Emma laan",
        "57327 Bos weg"
      ],
      discipline: 'Fysiotherapeut',
      emc: 'Leeburg',
      bio: 'Biografie',
      favoriteContacts : [],
      favoriteFiles : [],
      favoriteFolders : []
    }

    Accounts.createUser(userData, (err) => {
      if (err && err.reason) {
        return LocalState.set('REGISTER_ERROR', err.reason);
      }

      FlowRouter.go('/contacten')
    });
  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  }
}
