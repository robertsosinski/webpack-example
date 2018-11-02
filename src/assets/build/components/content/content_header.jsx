import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

let defaultProps = {
};

export default class ContentHeader extends React.Component {
  render() {
    return (
      <section className="content-header">
        <h1>
          {this.props.title}
          <small>{this.props.subtitle}</small>
        </h1>
      </section>
    );
  }
}

ContentHeader.propTypes = propTypes;
ContentHeader.defaultProps = defaultProps;