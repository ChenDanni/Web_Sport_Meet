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


import './RegisterCard.scss'

const buttonStyle = {
    marginTop: '10px',
    marginBottom: '10px'
};

class RegisterCard extends Component{
    render(){
        return(
            <Paper className="card">
                <p>Sign up now!</p>
                <TextField
                    fullWidth={true}
                    hintText="username"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="password"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="conform password"
                /><br />
                <RaisedButton label="SIGN UP" primary={true} style={buttonStyle} fullWidth={true} />
            </Paper>

        );
    }
}
// export default withStyles(LoginCard,s);
export default RegisterCard