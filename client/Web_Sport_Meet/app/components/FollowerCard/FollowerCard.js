/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import AvatarInfo from '../AvatarInfo/AvatarInfo'

import FlatButton from 'material-ui/FlatButton';

import s from './FollowerCard.scss'

const infoStyle = {
    paddingBottom:'10px',
    paddingTop:'4px'
};

const buttonStyle = {
    button:{
        padding:'0',
        minWidth:'56px'
    },
    labelStyle: {
        color: '#9B9B9B',
        fontSize: '12px',
        padding:'0 12px'
    }
};

class FollowerCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let fo = this.props.follower_info;
        return(
            <div className={s.card}>
                <Card>
                    <div className={s.header}>
                        <AvatarInfo
                            avatar = {fo.avatar}
                            username = {fo.username}
                            level = {fo.level}
                        />
                    </div>

                    <div>
                        <CardText style={infoStyle}>
                            平均步数: {fo.avg}
                        </CardText>
                        <CardText style={infoStyle}>
                            最近活动: {fo.recentact}
                        </CardText>
                        <CardText style={infoStyle}>
                            加入时间: {fo.joinat}
                        </CardText>
                    </div>

                    <div className={s.buttons}>
                        <FlatButton
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.labelStyle}
                            label="关注" />
                    </div>
                </Card>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default FollowerCard