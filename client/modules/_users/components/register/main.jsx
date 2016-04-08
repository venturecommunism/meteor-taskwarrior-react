import React from 'react'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password2: ''
        }
    }

    render() {
        console.log(this.props)
        const { register } = this.props
        const { password, password2, email } = this.state
        return (
            <div className="register-container">
                <div className="mtl">
                    <label className="f5 bold mbs plm pln-ns ttu tracked-mega db black-50" for="Username">
                        Email
                    </label>
                    <input name="email"
                           type="email"
                           value={email}
                           onChange={ (e) => this.setState({ email: e.target.value })}
                           className="register-container--input f3 semibold black-70 plm pvm db ba"></input>
                </div>
                <div className="mtl">
                    <label className="f5 bold mbs plm pln-ns ttu tracked-mega db black-50" for="Username">
                        Wachtwoord
                    </label>
                    <input type="password"
                           value={password}
                           onChange={ (e) => this.setState({ password: e.target.value })}
                           className="register-container--input f3 semibold black-70 plm pvm db ba"></input>
                </div>
                <div className="mtl">
                    <label className="f5 bold mbs plm pln-ns ttu tracked-mega db black-50" for="Username">
                        herhaal wachtwoord
                    </label>
                    <input type="password"
                           value={password2}
                           onChange={ (e) => this.setState({ password2: e.target.value })}
                           className="register-container--input f3 semibold black-70 plm pvm db ba"></input>
                </div>
                <div className="mtxl-l">
                    <button className="register-container--button tracked-mega btn btn--m plm pvm black-70"
                            onClick={ () => register(email, password, password2)}>
                        Registreer
                    </button>
                </div>
            </div>
        )
    }
}

