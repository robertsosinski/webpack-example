import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

let defaultProps = {
  icon: 'circle',
};

export default class ContentTabBoxControlDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

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

ContentTabBoxControlDropdown.propTypes = propTypes;
ContentTabBoxControlDropdown.defaultProps = defaultProps;