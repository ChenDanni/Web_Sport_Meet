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

import ActivityCardHead from '../ActivityCardHead/ActivityCardHead'

import s from './MyPublicActivityCard.scss'

const labelStyle={
    color:'#9B9B9B'
};

class MyPublicActivityCard extends Component{
    render(){
        return(
            <Paper className={s.container}>
                <ActivityCardHead/>
                <div className={s.buttons}>
                    <FlatButton
                        labelStyle={labelStyle}
                        label="编辑" />
                    <FlatButton
                        labelStyle={labelStyle}
                        label="删除" />
                </div>
            </Paper>
        );
    }
}

// export default withStyles(LoginCard,s);
export default MyPublicActivityCard