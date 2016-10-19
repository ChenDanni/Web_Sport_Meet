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

import './ActivityCardHead.scss'

const card_head_content = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    // width: '100px'
};
const card_head_content_container = {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'certain'
};

class ActivityCardHead extends Component{
    render(){
        return(
            <div>
                <CardTitle>
                    活动名称 from ccc
                </CardTitle>
                <div style={card_head_content_container}>
                    <div style={card_head_content}>
                        <Avatar src={require("../../icons/avatar1.png")} />
                        <p>已参与 3 人</p>
                    </div>
                    <div style={card_head_content}>
                        <Avatar src={require("../../icons/avatar1.png")} />
                        <p>10月20日</p>
                    </div>
                    <div style={card_head_content}>
                        <Avatar src={require("../../icons/avatar1.png")} />
                        <p>10月30日</p>
                    </div>
                    <div style={card_head_content}>
                        <Avatar src={require("../../icons/avatar1.png")} />
                        <p>组队</p>
                    </div>
                </div>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityCardHead