/*global Blaze */

import React from 'react'

const Header = (
  <div className="header">
    <div className="container">
      <div className="logo">
        <a href="/">
          React-ive Meteor
        </a>
      </div>
      <div className="nav">
        <a href="/feed">Feed Example</a>
        <a href="/about">Simple Page Example</a>
        <div id="loginContainer" />
      </div>
    </div>
    <br />
  </div>
);

export default Header
