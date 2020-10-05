import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { ROOT_ELEMENT_ID } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(ROOT_ELEMENT_ID)
);
