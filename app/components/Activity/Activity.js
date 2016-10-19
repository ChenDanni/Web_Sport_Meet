/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../Navigation/Navigation'
import ActivityLeftMenu from '../ActivityLeftMenu/ActivityLeftMenu'
import ActivityCard from '../ActivityCard/ActivityCard'
import MyPublicActivityCard from '../MyPublicActivityCard/MyPublicActivityCard'
import MyJoinActivityCard from '../MyJoinActivityCard/MyJoinActivityCard'
import ActivityPublicCard from '../ActivityPublicCard/ActivityPublicCard'
import './Activity.scss'

class Activity extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div className="content">
                    <Navigation className="navigation"/>
                    <ActivityLeftMenu/>
                    <ActivityCard/>
                    <MyPublicActivityCard/>
                    <MyJoinActivityCard/>
                    <ActivityPublicCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default Activity