
import React from 'react';

export default class ContentButtonLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content-header">
        <h1>
          {this.props.title}
          <small>{this.props.subtitle}</small>
        </h1>
      </section>
    );
  }
}