import React from 'react';

import Header from '../content/content_header.jsx';
import TabBox from '../content/content_tab_box.jsx';

import AlphaTab from './example_page/example_page_alpha_tab.jsx';
import BetaTab  from './example_page/example_page_beta_tab.jsx';
import GammaTab from './example_page/example_page_gamma_tab.jsx';

export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const tabs1 = [
      {component: AlphaTab, text: 'Alpha Tab', icon: 'plus-circle'},
      {component: BetaTab,  text: 'Beta Tab',  icon: 'recycle'},
      {component: GammaTab, text: 'Gamma Tab', icon: 'star'}
    ];

    const tabs2 = [
      {component: AlphaTab, text: 'Alpha Tab', icon: 'plus-circle'}
    ];

    return (
      <div>
        <Header title="Example Page" subtitle={this.props.location.pathname} />

        <section className="content container-fluid">
          <div className="row">
            <TabBox id="tab-box-1" col="md-6" tabs={tabs1} />
            <TabBox id="tab-box-2" col="md-6" tabs={tabs2} />
          </div>
        </section>
      </div>
    );
  }
}
