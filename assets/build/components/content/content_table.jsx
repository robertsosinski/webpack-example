import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  head: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
};

let defaultProps = {
  value: 'default',
};

export default class ContentTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {
              this.props.head.map(function(h, idx) {
                if (typeof(h) === 'string') {
                  return (<th key={idx}>{h}</th>);
                } else {
                  return (<th key={idx} style={{width:`${h.size}px`}}>{h.label}</th>);
                }
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.body.map(function(b, idx) {
              return (
                <tr key={idx}>
                  {
                    b.map((d, i) => 
                      <td key={i}>{d}</td>
                    )
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

ContentTable.propTypes = propTypes;
ContentTable.defaultProps = defaultProps;