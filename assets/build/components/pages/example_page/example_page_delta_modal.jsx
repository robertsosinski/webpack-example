import React from 'react';

import Input from '../../content/content_input.jsx';
import Button from '../../content/content_button.jsx';

export default class ExamplePageDeltaModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      progress: '',
    };
  }

  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCancel (event) {
    console.log(event);
    this.setState({name: '', progress: ''});
    event.preventDefault();
  }

  handleSubmit (event) {
    console.log(event);
    alert(`You've submitted name: "${this.state.name}" and progress: "${this.state.progress}%"`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <section>
          <Input id="delta-name" label="Name" name="name" type="text" placeholder="Name..." value={this.state.name} onChange={this.handleInputChange.bind(this)} />
          <Input id="delta-progress" label="Progress" name="progress" type="number" placeholder="Progress..." value={this.state.progress} onChange={this.handleInputChange.bind(this)} />
        </section>
        <section>
          <Button text="Close" icon="times" color="default" data-dismiss="modal" />
          <Button text="Submit" icon="thumbs-up" color="primary" type="submit" />
        </section>
      </form>
    );
  }
}