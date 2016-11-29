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
import Home from './components/Home/Home'
import Activity from './components/Activity/Activity'
import ActivityPublic from './components/ActivityPublic/ActivityPublic'
import MyPublicActivity from './components/MyPublicActivity/MyPublicActivity'
import MyJoinActivity from './components/MyJoinActivity/MyJoinActivity'
import Friends from './components/Friends/Friends'
import Groups from './components/Groups/Groups'
import Followings from './components/Followings/Followings'
import Followers from './components/Followers/Followers'
import HistoryData from './components/HistoryData/HistoryData'
import GroupCenter from './components/GroupCenter/GroupCenter'

import './components/total.scss'

injectTapEventPlugin();

render((
    <Router history={browserHistory}>
        <Route path="/register" components={Register}/>
        <Route path="/login" components={Login}/>
        <Route path="/personal_info_set" components={PersonalInfoSet}/>
        <Route path="/home" components={Home}/>
        <Route path="/activity" components={Activity}/>
        <Route path="/activity_public" components={ActivityPublic}/>
        <Route path="/my_public_activity" components={MyPublicActivity}/>
        <Route path="/my_join_activity" components={MyJoinActivity}/>
        <Route path="/friends" components={Friends}/>
        <Route path="/groups" components={Groups}/>
        <Route path="/followings" components={Followings}/>
        <Route path="/followers" components={Followers}/>
        <Route path="/history_data" components={HistoryData}/>
        <Route path="/groups_center" components={GroupCenter}/>
    </Router>
),document.getElementById('root'));
