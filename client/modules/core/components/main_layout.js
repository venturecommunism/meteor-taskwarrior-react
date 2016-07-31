import React from 'react';
import Navigation from './navigation';

const Layout = ({...queryParams, content = () => null }) => (
  <div>
    {content()}
  </div>
);

export default Layout;
