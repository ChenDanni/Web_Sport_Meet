/**
 * Created by chendanninode_modules/.bin/webpack app/main.js public/bundle.js on 16/10/18.
 */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import PersonalInfoSet from './pages/PersonalInfoSet/PersonalInfoSet'
import Home from './pages/Home/Home'
import Activity from './pages/Activity/Activity'
import ActivityPublic from './pages/ActivityPublic/ActivityPublic'
import MyPublicActivity from './pages/MyPublicActivity/MyPublicActivity'
import MyJoinActivity from './pages/MyJoinActivity/MyJoinActivity'
import Friends from './pages/Friends/Friends'
import Groups from './pages/Groups/Groups'
import Followings from './pages/Followings/Followings'
import Followers from './pages/Followers/Followers'
import HistoryData from './pages/HistoryData/HistoryData'
import GroupCenter from './pages/GroupCenter/GroupCenter'
import OthersHome from './pages/OthersHome/OthersHome'

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
        <Route path="/others_home" components={OthersHome}/>
    </Router>
),document.getElementById('root'));
