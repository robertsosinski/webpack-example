import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  waiting: PropTypes.bool,
};

let defaultProps = {
  color: 'primary',
  icon: 'circle',
  text: 'Submit',
  waiting: false,
};

export default class ContentButtonSubmit extends React.Component {
  render() {
    var node;

    if (this.props.waiting) {
      node = <i className="fa fa-fw fa-refresh fa-spin"></i>;
    } else {
      node = <i className={`fa fa-fw fa-${this.props.icon}`}></i>;
    }

    return (
      <span>
        <button className={`btn btn-${this.props.color}`} type="submit" disabled={this.props.waiting} >
          {node}
          {this.props.text || 'Button'}
        </button>
        &nbsp;
      </span>
    );
  }
}

ContentButtonSubmit.propTypes = propTypes;
ContentButtonSubmit.defaultProps = defaultProps;