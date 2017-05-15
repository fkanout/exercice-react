import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Home from './components/home.jsx';
import Details from './components/details.jsx';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/details/:id" component={Details}/>
        
    </Router>,
    document.getElementById('main')
);

