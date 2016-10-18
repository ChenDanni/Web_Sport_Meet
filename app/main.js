/**
 * Created by chendanninode_modules/.bin/webpack app/main.js public/bundle.js on 16/10/18.
 */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './components/Login/Login';

injectTapEventPlugin();


render((
    <Router history={browserHistory}>
        <Route path="/login" components={Login}/>

    </Router>
),document.getElementById('root'));