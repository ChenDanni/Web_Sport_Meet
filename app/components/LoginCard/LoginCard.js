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

import FlatButton from 'material-ui/FlatButton';

import './LoginCard.scss'

const buttonStyle = {
    marginTop: '10px',
    marginBottom: '10px'
};

class LoginCard extends Component{
    render(){
        return(
            <Paper className="card">
                <p>Welcome :D</p>
                <TextField
                    fullWidth={true}
                    hintText="username"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="password"
                /><br />
                <RaisedButton label="LOGIN" primary={true} style={buttonStyle} fullWidth={true} />
                <RaisedButton label="SIGN UP" style={buttonStyle} fullWidth={true} />
            </Paper>
        );
    }
}
// export default withStyles(LoginCard,s);
export default LoginCard