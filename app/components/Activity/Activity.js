/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../Navigation/Navigation'
import ActivityLeftMenu from '../ActivityLeftMenu/ActivityLeftMenu'

import './Activity.scss'

class Activity extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div  className="content">
                    <Navigation className="navigation"/>
                    <ActivityLeftMenu/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default Activity