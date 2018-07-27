import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

let defaultProps = {
  color: 'default',
  icon: 'circle',
  text: 'Button Link',
  onClick: (e) => { e.preventDefault(); },
};

export default class ContentButtonLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <a href="#" className={`btn btn-${this.props.color}`} onClick={this.props.onClick}>
          <i className={`fa fa-fw fa-${this.props.icon}`}></i>
          {this.props.text}
        </a>
        &nbsp;
      </span>
    );
  }
}

ContentButtonLink.propTypes = propTypes;
ContentButtonLink.defaultProps = defaultProps;