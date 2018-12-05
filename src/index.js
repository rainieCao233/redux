import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'
import { counter } from './index.redux'
import reducers from './reducers'
import Dashboard from './dashboard'
import Auth from './Auth'
import './config'
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const reduxDevtools = window.devToolsExtension? window.devToolsExtension() : f=>f
// const store = createStore(counter, compose(
//     applyMiddleware(thunk),
//     reduxDevtools
//   ))

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
  ))

console.log(store.getState())

function Erying(){
  return <h2>erying</h2>
}
function Sanying(){
  return <h2>sanying</h2>
}


class Test extends React.Component{
  //constructor(props){
  //  super(props);
  //}
  render(){
    return <h2>Test {this.props.match.params.location}</h2>
  }
}



ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">一营</Link>
            </li>
            <li>
              <Link to="/erying">2营</Link>
            </li>
            <li>
              <Link to="/sanying">3营</Link>
            </li>
            <li>
              <NavLink  activeClassName="selected" to="/erying">NavLink to Erying</NavLink>
            </li>
          </ul>
          <Switch>
            {/*只渲染命中的第一个Route*/}
            { /* exact 完全匹配 */}
            <Route path="/" exact component={App}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/erying" component={Erying}></Route>
            <Route path="/sanying" component={Sanying}></Route>
            <Route path="/login" component={Auth}></Route>
            <Route path="/:location" component={Test}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);

//<Route path="/:location" component={Test}></Route>
//<Redirect to="/sanying"></Redirect> //直接跳转



// function render(){
//
// }
//
// render()
// store.subscribe(render)












//通过reducer建立
//根据老的state和action 生成新的state
// function counter(state=0, action){
//   switch(action.type){
//     case "jiaqiang":
//       return state+1
//     case "jianqiang":
//       return state-1
//     default:
//       return 10
//   }
// }

//1.新建store
// const store = createStore(counter)
//
// const init = store.getState()
// console.log(init)
// function listener(){
//   const current = store.getState();
//   console.log(`现在有${current}把枪`)
// }
// store.subscribe(listener) //订阅一下这个函数
//派发事件 传递action
// store.dispatch({type:"jiaqiang"})
// console.log(store.getState())
// store.dispatch({type:"jianqiang"})
// console.log(store.getState())
