import React from 'react';

import Store from '../../services/store.js';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.things = new Store('things');

    this.state = {
      things: this.things.all()
    };
  }

  handleAddThing(e) {
    let val = {id: 123, name: 'My Thing'};

    this.things.add(val);

    this.setState({things: this.things.all()});
    e.preventDefault();
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

          <ul>
            {
              this.state.things.map((thing, idx) =>
                <li key={idx}>{thing.name}</li>
              )
            }
          </ul>

          <a href="#" onClick={this.handleAddThing.bind(this)}>Add</a>
        </section>
      </div>
    );
  }
}
