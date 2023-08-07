import { A, Outlet } from '@solidjs/router';
import { Component, JSXElement } from 'solid-js';
import NavSearch from './NavSearch';

const NavBar: Component = () => {
  return (
    <nav class="navbar navbar-light bg-light px-2 px-md-3 px-lg-5">
      <Outlet />
      <div class="container-fluid justify-content-between">
        <A class="navbar-brand" href="/">
          <img
            src="/blockexplorer.ico"
            alt="Blockexplorer icon"
            width="45"
            height="45"
          />
        </A>
        <NavSearch />
      </div>
    </nav>
  );
};

export default NavBar;
