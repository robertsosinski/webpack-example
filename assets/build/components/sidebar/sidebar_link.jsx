import React from 'react';

import {NavLink as Link, matchPath} from 'react-router-dom';

export default class SidebarLink extends React.Component {
  render () {
    var route = this.props.route;
    var isActive;

    if (matchPath(this.props.pathname, route)) {
      isActive = 'active';
    } else {
      isActive = undefined;
    }

    return (
      <li className={isActive}>
        <Link to={route.path} activeClassName="active">
          <i className={`fa fa-${route.icon || 'circle'}`}></i> <span>{route.text}</span>
        </Link>
      </li>
    );
  }
}
