import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

let defaultProps = {
  color: 'primary',
  icon: 'circle',
  text: 'Submit',
  type: 'button',
  onClick: (e) => { e.preventDefault(); },
};

export default class ContentButton extends React.Component {
  render() {
    return (
      <span>
        <button className={`btn btn-${this.props.color}`} type={this.props.type} onClick={this.props.onClick}>
          <i className={`fa fa-fw fa-${this.props.icon}`}></i>
          {this.props.text || 'Button'}
        </button>
        &nbsp;
      </span>
    );
  }
}

ContentButton.propTypes = propTypes;
ContentButton.defaultProps = defaultProps;