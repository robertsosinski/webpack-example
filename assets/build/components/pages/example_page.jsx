import React from 'react';

import Header from '../content/content_header.jsx';
import TabBox from '../content/content_tab_box.jsx';

import AlphaTab from './example_page/example_page_alpha_tab.jsx';
import BetaTab  from './example_page/example_page_beta_tab.jsx';
import GammaTab from './example_page/example_page_gamma_tab.jsx';

import GearControl from './example_page/example_page_gear_control.jsx';
import PlusControl from './example_page/example_page_gear_control.jsx';

export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const tabs0 = [
      {component: AlphaTab, text: 'Alpha Tab', icon: 'lock'},
      {component: BetaTab,  text: 'Beta Tab',  icon: 'image'},
      {component: GammaTab, text: 'Gamma Tab', icon: 'star'}
    ];

    const tabs1 = [
      {component: AlphaTab, text: 'Alpha Tab', icon: 'unlock'}
    ];

    const controls0 = [
      {component: GearControl, icon: 'gear'},
    ];

    const controls1 = [
      {component: PlusControl, icon: 'plus'},
    ];

    return (
      <div>
        <Header title="Example Page" subtitle={this.props.location.pathname} />

        <section className="content container-fluid">
          <div className="row">
            <TabBox id="tab-box-0" col="md-6" tabs={tabs0} controls={controls0} />
            <TabBox id="tab-box-1" col="md-6" tabs={tabs1} controls={controls1} />
          </div>
        </section>
      </div>
    );
  }
}
