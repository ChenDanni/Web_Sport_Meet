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
import Dialog from 'material-ui/Dialog';
import { Router, Route, Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import ActivityPublicCard from '../ActivityPublicCard/ActivityPublicCard'
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

const labelStyle={
    color:'#9B9B9B'
};


class ActivityLeftMenu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render(){
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                labelStyle={labelStyle}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                backgroundColor="#965200"
                labelColor="#FFF"
                style={{marginLeft:'16px'}}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                label="确认"/>
        ];
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
                    <RaisedButton
                        backgroundColor="#965200"
                        labelColor="#FFF"
                        style={{margin:'12px 16px'}}
                        keyboardFocused={true}
                        onTouchTap={this.handleOpen}
                        label="发布活动"
                    />
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <ActivityPublicCard/>
                    </Dialog>
                </div>

                <List className={s.list}>

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