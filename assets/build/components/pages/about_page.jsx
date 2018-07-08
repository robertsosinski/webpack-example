import React from 'react';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            About Page
            <small>{this.props.location.pathname}</small>
          </h1>
        </section>

        <section className="content container-fluid">
          <p>Learn all about us!</p>
        </section>
      </div>
    );
  }
}