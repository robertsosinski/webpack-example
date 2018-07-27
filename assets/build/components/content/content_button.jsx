import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

let defaultProps = {
  color: 'primary',
  icon: 'circle',
  text: 'Submit',
  type: 'button',
};

export default class ContentButtonSubmit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <button className={`btn btn-${this.props.color}`} type={this.props.type}>
          <i className={`fa fa-fw fa-${this.props.icon}`}></i>
          {this.props.text || 'Button'}
        </button>
        &nbsp;
      </span>
    );
  }
}

ContentButtonSubmit.propTypes = propTypes;
ContentButtonSubmit.defaultProps = defaultProps;