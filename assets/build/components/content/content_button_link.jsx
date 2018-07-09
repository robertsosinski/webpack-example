import React from 'react';

export default class ContentButtonLink extends React.Component {
  constructor(props) {
    super(props);
  }

  defaultOnClick (e) {
    e.preventDefault();
  }

  render() {
    return (
      <span>
        <a href="#" className={`btn btn-${this.props.color || 'default'}`} onClick={this.props.onClick || this.defaultOnClick}>
          <i className={`fa fa-fw fa-${this.props.icon || 'circle'}`}></i>
          {this.props.text || 'Button Link'}
        </a>
        &nbsp;
      </span>
    );
  }
}