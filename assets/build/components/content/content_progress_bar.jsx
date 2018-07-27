import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  legend: PropTypes.array,
  size: PropTypes.string,
};

let defaultProps = {
  color: 'blue',
  size: 'sm',
};

export default class ContentProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var color = this.props.color;
    var value = this.props.value;

    if (this.props.legend) {
      this.props.legend.forEach(function(i) {
        if (value >= i[0]) color = i[1];
      });
    } 

    return (
      <div className={`progress progress-${this.props.size} progress-striped active`}>
        <div className={`progress-bar progress-bar-${color}`} style={{width: `${this.props.value}%`}}></div>
      </div>
    );
  }
}

ContentProgressBar.propTypes = propTypes;
ContentProgressBar.defaultProps = defaultProps;