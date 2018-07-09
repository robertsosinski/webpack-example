import React from 'react';
import {HashRouter as Router, withRouter} from 'react-router-dom';

import Header  from './header.jsx';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';
import Footer  from './footer.jsx';

const SidebarWithRouter = withRouter(Sidebar);
const ContentWithRouter = withRouter(Content);

import IndexPage from './pages/index_page.jsx';
import AboutPage from './pages/about_page.jsx';
import FormPage  from './pages/form_page.jsx';
import MenuPage  from './pages/menu_page.jsx';

export default class Wrapper extends React.Component {
  render() {
    const routes = [
      {path: '/',      exact: true,  component: IndexPage, text: 'Index Page', icon: 'link'},
      {path: '/about', exact: false, component: AboutPage, text: 'About Page', icon: 'user'},
      {path: '/form',  exact: false, component: FormPage,  text: 'Form Page',  icon: 'chevron-circle-right'},
      {path: '/menu',  exact: false, component: MenuPage,  text: 'Menu Page',  icon: 'table'},
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
