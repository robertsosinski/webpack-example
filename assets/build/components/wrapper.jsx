import React from 'react';
import {HashRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import Footer from './footer.jsx';

const SidebarWithRouter = withRouter(Sidebar);

import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/not_found.jsx';

export default class Wrapper extends React.Component {
  render() {
    const routes = [
      {path: '/', exact: true, component: Index, text: 'Index Page', icon: 'link'},
      {path: '/about', component: About, text: 'About Page', icon: 'user'}
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
              <Route component={NotFound}/>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}
