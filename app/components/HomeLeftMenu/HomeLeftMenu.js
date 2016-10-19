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

import './HomeLeftMenu.scss'

const list_style = {
    marginTop: '0px',
    marginBottom: '0px',
    paddingTop: '0px',
    paddingBottom: '0px'
};

class HomeLeftMenu extends Component{

    render(){
        return(
            <Paper className="left-card">
                <List style={list_style}>
                    <ListItem primaryText="运动数据"/>
                    <Divider />
                    <ListItem primaryText="好友"/>
                    <Divider />
                    <ListItem primaryText="圈子"/>
                    <Divider />
                    <ListItem primaryText="关注"/>
                    <Divider />
                    <ListItem primaryText="粉丝"/>
                    <Divider />
                    <ListItem primaryText="历史数据"/>

                </List>
            </Paper>
        );
    }
}

export default HomeLeftMenu