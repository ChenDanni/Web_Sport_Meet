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

import FlatButton from 'material-ui/FlatButton';

import './HomeDataCard.scss'


class HomeDataCard extends Component{
    render(){
        return(
            <Paper className="data-card" id="main">
                some data
            </Paper>
        );
    }
}

// export default withStyles(LoginCard,s);
export default HomeDataCard