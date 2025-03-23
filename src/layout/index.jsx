import React from 'react';
import { Outlet, Link } from 'react-router';

function BasicLayout() {
  return (
    <>
      <header>
        <div>
          <h1>Github Resume App</h1>
          <Link to="/">To search</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <p>All rights reserved &copy; 2025</p>
        </div>
      </footer>
    </>
  );
}

export default BasicLayout;
