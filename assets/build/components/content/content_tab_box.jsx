import React from 'react';

export default class ContentTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content container-fluid">
        <div className="row">
          <div className={`col-${this.props.col}`}>
            <div className="nav-tabs-custom">
              <ul className="nav nav-tabs">
                {
                  this.props.tabs.map((tab, idx) =>
                    <li key={`tab_${idx}_tab`} className={idx === 0 ? 'active' : undefined}>
                      <a href={`#tab_${idx}`} data-toggle="tab" aria-expanded="true">
                        <i className={`fa fa-fw fa-${tab.icon || 'circle'}`} />
                        &nbsp;
                        {tab.text}
                      </a>
                    </li>
                  )
                }
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
                {
                  this.props.tabs.map((tab, idx) =>
                    <div key={`tab_${idx}_content`} id={`tab_${idx}`} className={idx === 0 ? 'tab-pane active' : 'tab-pane'}>
                      {React.createElement(tab.component, {})}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}