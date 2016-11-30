/**
 * Created by user on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../../components/Navigation/Navigation'
import GroupCenterLeftMenu from '../../components/GroupComponents/GroupCenterLeftMenu/GroupCenterLeftMenu'
import Search from '../../components/Search/Search'

import s from './GroupCenter.scss'

class GroupCenter extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <div className={s.searchContainer}>
                        <Search/>
                    </div>

                    <div className={s.content}>
                        <GroupCenterLeftMenu/>

                    </div>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default GroupCenter