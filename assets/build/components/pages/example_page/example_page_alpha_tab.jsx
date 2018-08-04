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
    console.log(event);
    alert(`You've submitted emailAddress: "${this.state.emailAddress}" and password: "${this.state.password}"`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h4 className="page-header">Login</h4>
        <section>
          <Input id="alpha-email-address" label="Email Address" name="emailAddress" type="email" placeholder="Put Email Address Here..." value={this.state.emailAddress} onChange={this.handleInputChange.bind(this)} />
          <Input id="alpha-password" label="Password" name="password" type="password" placeholder="Choose Something Strong..." value={this.state.password} onChange={this.handleInputChange.bind(this)} />
        </section>
        <section>
          <ButtonLink text="Cancel" icon="times" color="default" onClick={this.handleCancel.bind(this)} />
          <ButtonSubmit text="Submit" icon="thumbs-up" color="primary" />
        </section>
      </form>
    );
  }
}