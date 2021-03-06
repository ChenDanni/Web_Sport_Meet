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
import HomeLeftInfo from '../HomeLeftInfo/HomeLeftInfo'

import s from './HomeLeftMenu.scss'

class HomeLeftMenu extends Component{

    render(){
        return(
            <div>
                <HomeLeftInfo/>
                <Paper className={s.card}>
                    <List className={s.list}>
                        <ListItem>
                            <Link className={s.link} to="/home">运动数据</Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Link className={s.link} to="/followings">关注</Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Link className={s.link} to="/followers">粉丝</Link>
                        </ListItem>

                    </List>
                </Paper>
            </div>

        );
    }
}

export default HomeLeftMenu