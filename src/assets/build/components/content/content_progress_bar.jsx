import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  legend: PropTypes.array,
  size: PropTypes.string,
  active: PropTypes.bool,
};

let defaultProps = {
  active: false,
  color: 'blue',
  size: 'sm',
};

export default class ContentProgressBar extends React.Component {
  render() {
    var color  = this.props.color;
    var value  = this.props.value;
    var active = this.props.active ? 'progress-striped active' : '';

    if (this.props.legend) {
      this.props.legend.forEach(function(i) {
        if (value >= i[0]) color = i[1];
      });
    } 

    return (
      <div className={`progress progress-${this.props.size} ${active}`}>
        <div className={`progress-bar progress-bar-${color}`} style={{width: `${this.props.value}%`}}></div>
      </div>
    );
  }
}

ContentProgressBar.propTypes = propTypes;
ContentProgressBar.defaultProps = defaultProps;