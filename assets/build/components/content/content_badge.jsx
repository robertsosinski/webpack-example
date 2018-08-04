import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  legend: PropTypes.array,
};

let defaultProps = {
  color: 'blue',
};

export default class ContentBadge extends React.Component {
  render() {
    var color = this.props.color;
    var value = this.props.value;

    if (this.props.legend) {
      this.props.legend.forEach(function(i) {
        if (value >= i[0]) color = i[1];
      });
    } 

    return (
      <span className={`badge bg-${color}`}>{this.props.value}%</span>
    );
  }
}

ContentBadge.propTypes = propTypes;
ContentBadge.defaultProps = defaultProps;