import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

function Layout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet /> {/* Render the content based on the route */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
