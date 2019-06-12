import React from 'react';
import Image from '~/images/node/nodejs.png';

export default class ExamplePageBravoTab extends React.Component {
  render() {
    return (
      <div>
        <h4 className="page-header">Image</h4>
        <section>
          <img id="nodejs" src={Image} />
        </section>
      </div>
    );
  }
}