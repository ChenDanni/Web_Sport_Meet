/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Router, Route, Link } from 'react-router';

import s from './HomeLeftInfo.scss'

class HomeLeftInfo extends Component{

    render(){
        return(
            <Paper className={s.card}>

            </Paper>
        );
    }
}

export default HomeLeftInfo