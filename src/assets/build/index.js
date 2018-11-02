import './style.scss';
import './services/greet.js';

import React from 'react';
import ReactDom from 'react-dom';

import Wrapper from './components/wrapper.jsx';

ReactDom.render(
  React.createElement(Wrapper, {}),
  document.getElementById('wrapper')
);
