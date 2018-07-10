import React from 'react';
import Image from '../../../images/node/nodejs.png';

export default class ExamplePageBetaTab extends React.Component {
  constructor(props) {
    super(props);
  }

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