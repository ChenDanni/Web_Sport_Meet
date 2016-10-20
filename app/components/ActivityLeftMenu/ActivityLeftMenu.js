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
import s from './ActivityLeftMenu.scss'

const textStyle = {
    padding: '10px 16px',
    margin: '0 0',
    color: '#9B9B9B'
};
const titleStyle = {
    padding: '5px 0',
    fontSize: '16px'
};
const subtitleStyle = {

};

class ActivityLeftMenu extends Component{

    render(){
        return(
            <Paper className={s.card}>
                <CardHeader
                    titleStyle = {titleStyle}
                    subtitleStyle = {subtitleStyle}
                    title="username"
                    subtitle="Level.2"
                    avatar={require("../../icons/avatar1.png")}
                />
                <div className={s.info}>
                    <CardText style={textStyle}>
                        累计参加: 1
                    </CardText>
                    <CardText style={textStyle}>
                        当前排名: 3245
                    </CardText>
                </div>

                <List className={s.list}>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/activity_public">发布活动</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/my_public_activity">我发布的活动</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/my_join_activity">我参与的活动</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/activity">组队活动</Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link className={s.link} to="/activity">竞赛活动</Link>
                    </ListItem>
                    <Divider/>


                </List>
            </Paper>
        );
    }
}

export default ActivityLeftMenu