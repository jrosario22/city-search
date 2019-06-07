import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import City from './city';
import Notfound from './notfound';

const zipsearch = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/city">City</Link></li>
            </ul>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/city" component={City} />
            <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(zipsearch, document.getElementById('root'));