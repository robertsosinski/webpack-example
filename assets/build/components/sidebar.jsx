import React from 'react';

import Search from './sidebar/search.jsx';
import Link from './sidebar/link.jsx';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <Search />

          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">PAGES</li>
            {
              this.props.routes.map((route) =>
                <Link key={route.path} pathname={this.props.location.pathname} route={route} />
              )
            }
          </ul>
        </section>
      </aside>
    );
  }
}
