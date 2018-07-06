import React from 'react';

import SidebarSearch from './sidebar/sidebar_search.jsx';
import SidebarLink from './sidebar/sidebar_link.jsx';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <SidebarSearch />

          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">PAGES</li>
            {
              this.props.routes.map((route) =>
                <SidebarLink key={route.path} pathname={this.props.location.pathname} route={route} />
              )
            }
          </ul>
        </section>
      </aside>
    );
  }
}
