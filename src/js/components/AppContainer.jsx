import React from 'react';

import ActionCreator from '../actions/hero';
import Main from './App.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
export default React.createClass({
  _onChange() {
  },

 
  componentDidMount() {
   
  },

  componentWillUnmount() {
   
  },

  handleAddTask(e) {
   
  },

  handleClear(e) {
   
  },

  render() {

    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/address' component={Main} />
      </Router>
      
    )
  }
});
