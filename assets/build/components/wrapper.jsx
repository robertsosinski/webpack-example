import React from 'react';
import {HashRouter as Router, withRouter} from 'react-router-dom';

import Header  from './header.jsx';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';
import Footer  from './footer.jsx';

const SidebarWithRouter = withRouter(Sidebar);
const ContentWithRouter = withRouter(Content);

import IndexPage   from './pages/index_page.jsx';
import ExamplePage from './pages/example_page.jsx';

export default class Wrapper extends React.Component {
  render() {
    const routes = [
      {path: '/',        exact: true, component: IndexPage,   text: 'Index Page',   icon: 'link'},
      {path: '/example', exact: true, component: ExamplePage, text: 'Example Page', icon: 'table'},
    ];

    return (
      <Router>
        <div className="wrapper">
          <Header />
          <SidebarWithRouter routes={routes} />
          <ContentWithRouter routes={routes} />
          <Footer />
        </div>
      </Router>
    );
  }
}
