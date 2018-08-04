import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

let defaultProps = {
  icon: 'circle',
};

export default class ContentTabBoxDropdownControl extends React.Component {
  render() {
    return (
      <li id={this.props.id} className="pull-right">
        <a className="btn btn-box-tool droptown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
          <i className={`fa fa-${this.props.icon}`}></i>
        </a>
        <ul className="dropdown-menu" role="menu">
          {this.props.children}
        </ul>
      </li>
    );
  }
}

ContentTabBoxDropdownControl.propTypes = propTypes;
ContentTabBoxDropdownControl.defaultProps = defaultProps;