import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

let defaultProps = {
  icon: 'circle',
};

export default class ContentTabBoxModalControl extends React.Component {
  render() {
    return (
      <li id={this.props.id} className="pull-right">
        <a className="btn btn-box-tool" href="#" data-toggle="modal" data-target={`#${this.props.id}`}>
          <i className={`fa fa-${this.props.icon}`}></i>
        </a>
      </li>
    );
  }
}

ContentTabBoxModalControl.propTypes = propTypes;
ContentTabBoxModalControl.defaultProps = defaultProps;