/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Router, Route, Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import s from './HomeLeftMenu.scss'

class HomeLeftMenu extends Component{

    render(){
        return(
            <Paper className={s.card}>
                <List className={s.list}>
                    <ListItem>
                        <Link className={s.link} to="/home">运动数据</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/friends">好友</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/groups">圈子</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/followings">关注</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/followers">粉丝</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/history_data">历史数据</Link>
                    </ListItem>

                </List>
            </Paper>
        );
    }
}

export default HomeLeftMenu