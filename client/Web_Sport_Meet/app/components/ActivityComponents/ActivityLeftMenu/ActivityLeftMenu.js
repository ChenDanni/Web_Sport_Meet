/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import { Router, Route, Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import ActivityPublicCard from '../ActivityPublicCard/ActivityPublicCard'
import {newTheme} from '../../../theme'
import s from './ActivityLeftMenu.scss'


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
        let left_info = this.props.left_info;
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                labelStyle={labelStyle}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                primary={true}
                labelColor="#FFF"
                style={{marginLeft:'16px'}}
                onTouchTap={this.handleClose}
                label="确认"/>
        ];
        return(
            <MuiThemeProvider muiTheme={newTheme}>
                <Paper className={s.card}>
                    <CardHeader
                        titleStyle = {titleStyle}
                        subtitleStyle = {subtitleStyle}
                        title={left_info.username}
                        subtitle={"Level." + left_info.level}
                        avatar={require("../../../icons/avatar1.png")}
                        //avatar={left_info.avatar}
                    />
                    <div className={s.info}>
                        <div className={s.text}>
                            <p>累计参加: {left_info.total}</p>
                            <p>本周平均步数: {left_info.avg}</p>
                        </div>
                        <RaisedButton
                            primary={true}
                            labelColor="#FFF"
                            style={{width:'100%'}}
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
                            <Link className={s.link} to="/activity">活动列表</Link>
                        </ListItem>


                    </List>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default ActivityLeftMenu