import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import AddNewGroup from './components/AddNewGroup/AddNewGroup.jsx';
import {RouterInner} from './components/RouterInner.jsx';

import store from './reducers/index.js';
import './assets/scss/index.scss';

const ContactBook = ({
  config = {},
}) => {
  return (
    <Provider store={store}>
      <Router>
        <RouterInner config={config}/>
        <AddNewGroup config={config} />
      </Router>
    </Provider>
  );
}

export default ContactBook;