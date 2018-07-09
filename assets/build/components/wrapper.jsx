import React from 'react';
import {HashRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import Header  from './header.jsx';
import Sidebar from './sidebar.jsx';
import Footer  from './footer.jsx';

const SidebarWithRouter = withRouter(Sidebar);

import IndexPage    from './pages/index_page.jsx';
import AboutPage    from './pages/about_page.jsx';
import FormPage     from './pages/form_page.jsx';
import NotFoundPage from './pages/not_found_page.jsx';

export default class Wrapper extends React.Component {
  render() {
    const routes = [
      {path: '/',      exact: true,  component: IndexPage, text: 'Index Page', icon: 'link'},
      {path: '/about', exact: false, component: AboutPage, text: 'About Page', icon: 'user'},
      {path: '/form',  exact: false, component: FormPage,  text: 'Form Page',  icon: 'chevron-circle-right'},
    ];

    return (
      <Router>
        <div className="wrapper">
          <Header />

          <SidebarWithRouter routes={routes} />

          <div className="content-wrapper">
            <Switch>
              {
                routes.map((route) =>
                  <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>
                )
              }
              <Route component={NotFoundPage}/>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}
