import React from 'react';

import Dropdown from '../../content/content_tab_box_control_dropdown.jsx';

export default class ExamplePageZuluControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropdown id={this.props.id} icon={this.props.icon}>
        <li><a href="#">Action One</a></li>
        <li><a href="#">Action Two</a></li>
        <li><a href="#">Action Three</a></li>
        <li className="divider"></li>
        <li><a href="#">Action Four</a></li>
      </Dropdown>
    );
  }
}