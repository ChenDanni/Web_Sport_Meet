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
import FlatButton from 'material-ui/FlatButton';

import './ActivityLeftMenu.scss'

const list_style = {
    marginTop: '0px',
    marginBottom: '0px',
    paddingTop: '0px',
    paddingBottom: '0px'
};

class ActivityLeftMenu extends Component{

    render(){
        return(
            <Paper className="activity-left-card">
                <CardHeader
                    title="username"
                    subtitle="Level.2"
                    avatar={require("../../icons/avatar1.png")}
                />
                <CardText>
                    累计参加:
                </CardText>
                <CardText>
                    当前排名:
                </CardText>
                <List style={list_style}>
                    <Divider />
                    <ListItem primaryText="发布活动"/>
                    <Divider />
                    <ListItem primaryText="我的活动"/>
                    <Divider />
                    <ListItem primaryText="我参与的活动"/>
                    <Divider />
                    <ListItem primaryText="组队活动"/>
                    <Divider />
                    <ListItem primaryText="竞赛活动"/>

                </List>
            </Paper>
        );
    }
}

export default ActivityLeftMenu