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
  text: 'Submit Button',
};

export default class ContentButtonSubmit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <button className={`btn btn-${this.props.color}`} type="submit">
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