import React from 'react';
import Image from '../../images/node/nodejs.png';

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
          <img id="nodejs" src={Image} />
        </section>
      </div>
    );
  }
}
