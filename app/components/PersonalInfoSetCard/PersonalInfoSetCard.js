/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

import s from './PersonalInforSetCard.scss'

const buttonStyle = {
    marginTop: '10px',
    marginBottom: '10px'
};

class PersonalInfoSetCard extends Component{
    render(){
        return(
            <Paper className={s.card}>
                <div className={s.header}>
                    <Avatar src={require("../../icons/avatar1.png")} />
                    <p>chendanni</p>
                </div>
                <TextField
                    fullWidth={true}
                    hintText="性别"
                /><br />
                <TextField
                    fullWidth={true}
                    hintText="邮箱"
                /><br />
                <TextField
                    fullWidth={true}
                    hintText="手机"
                /><br />
                <TextField
                    fullWidth={true}
                    hintText="爱好"
                /><br />
                <TextField
                    fullWidth={true}
                    hintText="生日"
                /><br />
                <TextField
                    fullWidth={true}
                    hintText="所在地"
                /><br />
                <RaisedButton
                    label="确认"
                    backgroundColor="#965200"
                    labelColor="#FFF"
                    style={buttonStyle}
                    fullWidth={true} />
            </Paper>
        );
    }
}
// export default withStyles(LoginCard,s);
export default PersonalInfoSetCard