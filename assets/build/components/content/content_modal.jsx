import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.func.isRequired,
};

let defaultProps = {
  type: 'default',
};

export default class ContentModal extends React.Component {
  render() {
    return (
      <div className={`modal modal-${this.props.type} fade in`} id={this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {React.createElement(this.props.body, {})}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContentModal.propTypes = propTypes;
ContentModal.defaultProps = defaultProps;