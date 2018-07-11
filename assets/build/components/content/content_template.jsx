import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  value: PropTypes.string.isRequired,
};

let defaultProps = {
  value: 'default',
};

export default class ContentTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}

ContentTemplate.propTypes = propTypes;
ContentTemplate.defaultProps = defaultProps;