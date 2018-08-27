import Promise from 'bluebird';

import React from 'react';

import Input from '../../content/content_input.jsx';
import ButtonSubmit from '../../content/content_button_submit.jsx';
import ButtonLink from '../../content/content_button_link.jsx';

export default class ExamplePageAlphaTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
      password: '',
      waiting: false,
    };
  }

  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCancel (event) {
    console.log(event);
    this.setState({emailAddress: '', password: ''});
    event.preventDefault();
  }

  handleSubmit (event) {
    var self = this;

    event.preventDefault();

    this.setState({waiting: true});

    console.log(event);

    new Promise(function(resolve, reject) {
      try {
        setTimeout(function() {
          alert(`You've submitted emailAddress: "${self.state.emailAddress}" and password: "${self.state.password}"`);
          self.setState({waiting: false});
          resolve(this._idleStart);
        }, 2000);
      } catch (e) {
        console.log('Rejected');
        reject(e);
      }
    }).bind(this);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h4 className="page-header">Login</h4>
        <section>
          <Input id="alpha-email-address" label="Email Address" name="emailAddress" type="email" placeholder="Put Email Address Here..." value={this.state.emailAddress} onChange={this.handleInputChange.bind(this)} />
          <Input id="alpha-password" label="Password" name="password" type="password" placeholder="Choose Something Strong..." value={this.state.password} onChange={this.handleInputChange.bind(this)} />
        </section>
        <section>
          <ButtonLink text="Cancel" icon="times" color="default" onClick={(e) => this.handleCancel(e)} />
          <ButtonSubmit text="Submit" icon="thumbs-up" color="primary" waiting={this.state.waiting} />
        </section>
      </form>
    );
  }
}