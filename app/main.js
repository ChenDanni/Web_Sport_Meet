/**
 * Created by chendanninode_modules/.bin/webpack app/main.js public/bundle.js on 16/10/18.
 */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './components/Login/Login';
import Register from './components/Register/Register'
import PersonalInfoSet from './components/PersonalInfoSet/PersonalInfoSet'

injectTapEventPlugin();


render((
    <Router history={browserHistory}>
        <Route path="/login" components={Login}/>
        <Route path="/register" components={Register}/>
        <Route path="/personal_info_set" components={PersonalInfoSet}/>
    </Router>
),document.getElementById('root'));