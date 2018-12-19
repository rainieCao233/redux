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
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import AuthRoute from './component/authroute/authroute'
import './index.css'

const reduxDevtools = window.devToolsExtension? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
  ))

console.log(store.getState())

function Boss(){
  return <h2>123</h2>
}
ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Route path="/boss" component={Boss} />
          <Route path="/bossinfo" component={BossInfo} />
          <Route path="/geniusinfo" component={GeniusInfo} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
