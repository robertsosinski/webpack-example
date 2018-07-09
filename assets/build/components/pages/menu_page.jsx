import React from 'react';

export default class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            Menu Page
            <small>{this.props.location.pathname}</small>
          </h1>
        </section>

        <section className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab_1" data-toggle="tab" aria-expanded="true">
                      <i className="fa fa-fw fa-plus-circle"></i>
                      &nbsp;
                      Tab 1
                    </a>
                  </li>
                  <li>
                    <a href="#tab_2" data-toggle="tab" aria-expanded="true">
                      <i className="fa fa-fw fa-recycle"></i>
                      &nbsp;
                      Tab 2
                    </a>
                  </li>
                  <li>
                    <a href="#tab_3" data-toggle="tab" aria-expanded="true">
                      <i className="fa fa-fw fa-star"></i>
                      &nbsp;
                      Tab 3
                    </a>
                  </li>
                  <li className="pull-right">
                    <a className="btn btn-box-tool droptown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-gear"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Action One</a></li>
                      <li><a href="#">Action Two</a></li>
                      <li><a href="#">Action Three</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Action Four</a></li>
                    </ul>
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab_1" className="tab-pane active">
                    <h3>Tab 1</h3>
                    <p>Here is Tab 1</p>
                  </div>

                  <div id="tab_2" className="tab-pane">
                    <h3>Tab 2</h3>
                    <p>Here is Tab 2</p>
                  </div>

                  <div id="tab_3" className="tab-pane">
                    <h3>Tab 3</h3>
                    <p>Here is Tab 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
