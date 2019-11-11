import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MessengerContainer from './containers/MessengerContainer.js'
import './styles/globalStyles.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <MessengerContainer />
  </Router>,
	document.getElementById('root'),
);