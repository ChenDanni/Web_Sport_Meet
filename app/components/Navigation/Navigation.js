/**
 * Created by chendanni on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

class Navigation extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <IconButton tooltip="SVG Icon">
                    <ActionHome />
                </IconButton>
            </MuiThemeProvider>
        );
    }
}

export default Navigation;