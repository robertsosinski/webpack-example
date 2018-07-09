import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from './pages/not_found_page.jsx';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-wrapper">
        <Switch>
          {
            this.props.routes.map((route) =>
              <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>
            )
          }
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}