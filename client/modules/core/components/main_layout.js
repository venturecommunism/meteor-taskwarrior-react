import React from 'react';
import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <div>
    {content()}
  </div>
);

export default Layout;
