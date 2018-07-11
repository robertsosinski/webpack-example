import React from 'react';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            Index Page
            <small>{this.props.location.pathname}</small>
          </h1>
        </section>

        <section className="content container-fluid">
          <p>{window.env.url}</p>
        </section>
      </div>
    );
  }
}
