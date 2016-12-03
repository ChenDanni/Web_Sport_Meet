/**
 * Created by chendanni on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import cookie from 'react-cookie'
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery'
import s from './LoginCard.scss'


const buttonStyle = {
    marginTop: '14px',
    // height: '40px'
};

class LoginCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            test: 'test'
        };
    }

    handleLogin(){
        let username = this.refs.musername.input.value;
        let password = this.refs.mpassword.input.value;
        cookie.save('username', username);
        cookie.save('login',1);
        window.location.href = '/home';
    }

    render(){
        return(
            <Paper className={s.card}>
                <p className={s.cardTitle}>Welcome :D</p>
                <TextField
                    fullWidth={true}
                    hintText="username"
                    ref="musername"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="password"
                    ref="mpassword"
                /><br />
                <RaisedButton
                    primary={true}
                    labelColor="#FFF"
                    label="登录"
                    style={buttonStyle}
                    fullWidth={true}
                    onTouchTap = {this.handleLogin.bind(this)}
                />
                <RaisedButton label="注册" style={buttonStyle} fullWidth={true} />
            </Paper>
        );
    }
}
// export default withStyles(LoginCard,s);
export default LoginCard