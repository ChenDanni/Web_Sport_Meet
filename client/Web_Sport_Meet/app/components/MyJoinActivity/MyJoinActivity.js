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
import AvtivityInfoCard from '../ActivityInfoCard/ActivityInfoCard'
import Search from '../Search/Search'
import s from './MyJoinActivity.scss'

class MyJoinActivity extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <div className={s.searchContainer}>
                        <Search/>
                    </div>

                    <div className={s.content}>
                        <ActivityLeftMenu/>
                        <div className={s.activities}>
                            <MyJoinActivityCard/>
                            <MyJoinActivityCard/>
                        </div>
                    </div>

                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyJoinActivity