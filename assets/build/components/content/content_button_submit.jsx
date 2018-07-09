import React from 'react';

export default class ContentButtonLink extends React.Component {
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