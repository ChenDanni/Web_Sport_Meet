/**
 * Created by chendanni on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

class Navigation extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <Toolbar>
                    <ToolbarGroup firstChild = {true}>
                        <IconButton>
                            <ActionHome />
                        </IconButton>
                        <ToolbarTitle text="Sports Meet" />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <FlatButton label="LOGIN" href=""/>
                        <a href="">LOGIN</a>
                        <ToolbarSeparator />
                        <FlatButton label="SIGN UP" href=""/>
                        <a href="">SIGN UP</a>
                    </ToolbarGroup>
                </Toolbar>
            </MuiThemeProvider>
        );
    }
}

export default Navigation;