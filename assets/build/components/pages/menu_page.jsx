import React from 'react';

import Header from '../content/content_header.jsx';
import TabBox from '../content/content_tab_box.jsx';

import AlphaTab from './menu_page/menu_page_alpha_tab.jsx';
import BetaTab  from './menu_page/menu_page_beta_tab.jsx';
import GammaTab from './menu_page/menu_page_gamma_tab.jsx';

export default class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const tabs = [
      {component: AlphaTab, text: 'Alpha Tab', icon: 'plus-circle'},
      {component: BetaTab,  text: 'Beta Tab',  icon: 'recycle'},
      {component: GammaTab, text: 'Gamma Tab', icon: 'star'}
    ];

    return (
      <div>
        <Header title="Menu Page" subtitle={this.props.location.pathname} />

        <section className="content container-fluid">
          <div className="row">
            <TabBox id="tab-box-1" col="md-6" tabs={tabs} />
            <TabBox id="tab-box-2" col="md-6" tabs={tabs} />
          </div>
        </section>
      </div>
    );
  }
}
