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
                <p className={s.num}>46352723</p>
                <p>累计步数</p>
            </Paper>
        );
    }
}

export default HomeLeftInfo