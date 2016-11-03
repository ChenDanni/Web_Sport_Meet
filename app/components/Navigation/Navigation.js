/**
 * Created by chendanni on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery'
import s from './Navigation.scss';

class Navigation extends Component{

    render(){
        return(
            <Toolbar className={s.nav}>
                <ToolbarGroup firstChild = {true}>
                    <IconButton>
                        <ActionHome />
                    </IconButton>
                    <ToolbarTitle
                        style={{color: '#fff'}}
                        text="Sports Meet" />
                    <Link className={s.link} to="/home">HOME</Link>
                    <Link className={s.link} to="/activity">ACTIVITIES</Link>
                    <Link className={s.link} to="/groups_center">GROUPS</Link>
                </ToolbarGroup>
                <ToolbarGroup className={s.linkGroup}>
                    <Link className={s.link} to="/login">LOGIN</Link>
                    <Link className={s.link} to="/register">SIGN UP</Link>
                </ToolbarGroup>
            </Toolbar>

        );
    }
}

export default Navigation;
// export default withStyles(Navigation,s);