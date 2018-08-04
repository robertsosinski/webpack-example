import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

let defaultProps = {
  type: 'text'
};

export default class ContentInput extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input id={this.props.id} className="form-control" placeholder={this.props.placeholder} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
      </div>
    );
  }
}

ContentInput.propTypes = propTypes;
ContentInput.defaultProps = defaultProps;
