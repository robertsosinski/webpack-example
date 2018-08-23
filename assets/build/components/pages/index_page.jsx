import React from 'react';

import Store from '../../services/store.js';
import moment from 'moment';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.things = new Store('things');

    this.state = {
      things: this.things.all()
    };
  }

  handleAddThing(e) {
    let val = {date: moment().format()};

    this.setState({things: this.things.add(val)});
    e.preventDefault();
  }

  handleDelThing(e, idx) {
    console.log('hello');
    this.setState({things: this.things.del(idx)});
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
                <li key={idx}>
                  <span>{thing.date}</span>
                  <a href="#" onClick={(e) => { this.handleDelThing(e, idx); }}>x</a>
                </li>
              )
            }
          </ul>

          <a href="#" onClick={this.handleAddThing.bind(this)}>Add</a>
        </section>
      </div>
    );
  }
}
