import React from 'react';
import MainNavigation from './MainNavigation';
import Container from '@mui/material/Container';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
