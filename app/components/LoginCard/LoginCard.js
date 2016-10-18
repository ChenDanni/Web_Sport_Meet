/**
 * Created by chendanni on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';

const style = {
    margin: 12,
};
class LoginCard extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <Card>
                    <CardHeader
                        title="Welcome :D"
                    />
                    <TextField
                        hintText="username"
                    /><br />
                    <TextField type="password"
                        hintText="password"
                    /><br />
                    <RaisedButton label="LOGIN" primary={true} style={style} fullWidth={true} />
                </Card>

            </MuiThemeProvider>
        );
    }
}
export default LoginCard;