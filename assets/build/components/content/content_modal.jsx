import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

let defaultProps = {
  type: 'default',
};

export default class ContentModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}

ContentModal.propTypes = propTypes;
ContentModal.defaultProps = defaultProps;