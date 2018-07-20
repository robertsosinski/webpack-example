import React from 'react';

import Header from '../content/content_header.jsx';
import TabBox from '../content/content_tab_box.jsx';

import AlphaTab from './example_page/example_page_alpha_tab.jsx';
import BravoTab  from './example_page/example_page_bravo_tab.jsx';
import CharlieTab from './example_page/example_page_charlie_tab.jsx';
import DeltaTab from './example_page/example_page_delta_tab.jsx';

import ZuluControl from './example_page/example_page_zulu_control.jsx';

export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const tabs0 = [
      {component: AlphaTab,   text: 'Alpha Tab', icon: 'lock'},
      {component: BravoTab,   text: 'Bravo Tab',  icon: 'image'},
      {component: CharlieTab, text: 'Charlie Tab', icon: 'star'}
    ];

    const tabs1 = [
      {component: DeltaTab, text: 'Delta Tab', icon: 'unlock'}
    ];

    const controls0 = [
      {component: ZuluControl, icon: 'gear'},
    ];

    const controls1 = [
      {component: ZuluControl, icon: 'list'},
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
