import React from 'react';

class Button extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="universal-button">
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <div onClick={this.pressButton.bind(this)} ref="buttonRef"></div> <br />
      </div>
    );
  }

  pressButton() {
    const {create} = this.props;
    const {buttonRef} = this.refs;

    create(buttonRef.value);
  }
}

export default Button

