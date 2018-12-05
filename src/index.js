import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'

import reducers from './reducers'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'

const reduxDevtools = window.devToolsExtension? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
  ))

console.log(store.getState())

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
