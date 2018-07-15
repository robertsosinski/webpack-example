import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  col: PropTypes.string,
  tabs: PropTypes.array.isRequired,
  controls: PropTypes.array.isRequired,
};

let defaultProps = {
  col: 'md-12',
  tabs: [],
  controls: [],
};

export default class ContentTabBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className={`col-${this.props.col}`}>
        <div className="nav-tabs-custom">
          <ul className="nav nav-tabs">
            {
              this.props.tabs.map((tab, idx) =>
                <li key={`${this.props.id}-pane_${idx}-tab`} className={idx === 0 ? 'active' : undefined}>
                  <a href={`#${this.props.id}-pane-${idx}`} data-toggle="tab" aria-expanded="true">
                    <i className={`fa fa-fw fa-${tab.icon || 'circle'}`} />
                    &nbsp;
                    {tab.text || 'Tab Title'}
                  </a>
                </li>
              )
            }

            {
              this.props.controls.map((control, idx) => {
                let keyId = `${this.props.id}-control-${idx}`;

                return React.createElement(control.component, {key: keyId, id: keyId, icon: control.icon});
              })
            }
          </ul>

          <div className="tab-content">
            {
              this.props.tabs.map((tab, idx) =>
                <div key={`${this.props.id}-pane-${idx}-content`} id={`${this.props.id}-pane-${idx}`} className={idx === 0 ? 'tab-pane active' : 'tab-pane'}>
                  {React.createElement(tab.component, {})}
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

ContentTabBox.propTypes = propTypes;
ContentTabBox.defaultProps = defaultProps;