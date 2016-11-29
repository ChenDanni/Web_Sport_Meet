/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../Navigation/Navigation'
import ActivityLeftMenu from '../ActivityLeftMenu/ActivityLeftMenu'
import ActivityCard from '../ActivityCard/ActivityCard'
import Search from '../Search/Search'
import s from './Activity.scss'
import {newTheme} from '../../theme'

class Activity extends Component{

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>
                <div>
                    <Navigation/>
                    <div className={s.searchContainer}>
                        <Search/>
                    </div>

                    <div className={s.content}>
                        <ActivityLeftMenu/>
                        <div className={s.activities}>
                            <ActivityCard/>
                            <ActivityCard/>
                            <ActivityCard/>
                            <ActivityCard/>
                        </div>
                    </div>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default Activity