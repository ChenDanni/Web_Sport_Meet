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

const buttonStyle = {
    height:'54px',
    padding:'0',
    margin:'auto,0'
};

class Navigation extends Component{

    render(){
        return(
            <Toolbar className={s.nav}>
                <ToolbarGroup
                    firstChild = {true}>
                    <IconButton
                        style={buttonStyle}
                    >
                        <ActionHome
                            color="#ffffff"
                        />
                    </IconButton>
                    <ToolbarTitle
                        style={{color: '#fff'}}
                        text="Sports Meet" />
                    <Link className={s.link} to="/home">主页</Link>
                    <Link className={s.link} to="/activity">活动</Link>
                    <Link className={s.link} to="/groups_center">圈子</Link>
                </ToolbarGroup>
                <ToolbarGroup className={s.linkGroup}>
                    <Link className={s.link} to="/login">登录</Link>
                    <Link className={s.link} to="/register">注册</Link>
                </ToolbarGroup>
            </Toolbar>

        );
    }
}

export default Navigation;
// export default withStyles(Navigation,s);