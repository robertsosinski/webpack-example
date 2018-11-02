import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <a href="#" className="logo">
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>

        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button" />
        </nav>
      </header>
    );
  }
}
