import React from 'react';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: '',
      password: ''
    };
  }

  handleSubmit (event) {
    console.log(event);
    alert(`You've submitted emailAddress: "${this.state.emailAddress}" and password: "${this.state.password}"`);
    event.preventDefault();
  }

  handleCancel (event) {
    console.log(event);
    this.setState({emailAddress: '', password: ''});
    event.preventDefault();
  }

  updateState (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            Form Page
            <small>{this.props.location.pathname}</small>
          </h1>
        </section>

        <section className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Form</h3>
                  <div className="box-tools pull-right">
                    <div className="btn-group">
                      <button className="btn btn-box-tool droptown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-gear"></i>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action One</a></li>
                        <li><a href="#">Action Two</a></li>
                        <li><a href="#">Action Three</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Action Four</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="box-body">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="example-email-address">Email Address</label>
                        <input id="example-email-address" className="form-control" placeholder="Enter email address" type="email" name="emailAddress" value={this.state.emailAddress} onChange={this.updateState.bind(this)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="example-password">Password</label>
                        <input id="example-password" className="form-control" placeholder="Enter Password" type="password" name="password" value={this.state.password} onChange={this.updateState.bind(this)} />
                      </div>
                    </div>
                  </div>

                  <div className="box-footer">
                    <div className="pull-right">
                      <a href="#" className="btn btn-default" onClick={this.handleCancel.bind(this)}>
                        <i className="fa fa-fw fa-times"></i>
                        Cancel
                      </a>
                      &nbsp;
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-fw fa-thumbs-up"></i>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
