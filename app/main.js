/**
 * Created by chendanninode_modules/.bin/webpack app/main.js public/bundle.js on 16/10/18.
 */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navigation from './components/Navigation/Navigation';
import LoginCard from './components/LoginCard/LoginCard';


injectTapEventPlugin();

render(<Navigation />, document.getElementById('root'));
render(<LoginCard />, document.getElementById('card'));
