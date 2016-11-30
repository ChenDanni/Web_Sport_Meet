/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../../components/Navigation/Navigation'
import ActivityLeftMenu from '../../components/ActivityComponents/ActivityLeftMenu/ActivityLeftMenu'
import ActivityPublicCard from '../../components/ActivityComponents/ActivityPublicCard/ActivityPublicCard'
import Search from '../../components/Search/Search'
import s from './ActivityPublic.scss'
import {newTheme} from '../../theme'

class ActivityPublic extends Component{

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
                        <div className={s.publicCard}>
                            <ActivityPublicCard/>
                        </div>
                    </div>

                </div>

            </MuiThemeProvider>
        );
    }
}

export default ActivityPublic