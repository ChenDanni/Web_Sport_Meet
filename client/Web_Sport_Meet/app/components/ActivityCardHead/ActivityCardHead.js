/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import s from './ActivityCardHead.scss'

class ActivityCardHead extends Component{
    render(){
        return(
            <div>
                <div className={s.title}>
                    <p>一起来跑步吧</p>
                    <p className={s.author}>from ccc</p>
                </div>
                <div className={s.container}>
                    <div className={s.item}>
                        <Avatar src={require("../../icons/avatar1.png")} />
                        <p>已参与 3 人</p>
                    </div>
                    <div className={s.item}>
                        <Avatar src={require("../../icons/start.jpg")} />
                        <p>10月20日</p>
                    </div>
                    <div className={s.item}>
                        <Avatar src={require("../../icons/end.jpg")} />
                        <p>10月30日</p>
                    </div>
                    <div className={s.item}>
                        <Avatar src={require("../../icons/team.jpg")} />
                        <p>组队</p>
                    </div>
                </div>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityCardHead