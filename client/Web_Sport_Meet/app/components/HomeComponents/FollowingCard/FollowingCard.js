/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AvatarInfo from '../../AvatarInfo/AvatarInfo'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import s from './FollowingCard.scss'

const buttonStyle = {
    button:{
        // padding:'0',
        height:'40px',
        // border: 'none',
        // boxShadow: 'none',
    },
    commonButton:{
        height:'40px',
        marginRight:'8px'
    },
    labelStyle: {
        color: '#9B9B9B',
        fontSize: '16px',
        padding:'0 32px'
    },
    commonLabelStyle:{
        fontSize: '16px',
        padding:'0 32px',
        lineHeight:'40px',
        paddingLeft:'32px',
    }
};

class FollowingCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let fo = this.props.following_info;
        return(
            <div>
                <Paper className={s.card}>
                    <div className={s.header}>
                        <AvatarInfo
                            avatar = {require("../../../icons/avatar1.png")}
                            username = {fo.username}
                            level = {fo.level}
                            joinat = {fo.joinat}
                        />
                    </div>

                    <div className={s.info}>
                        <p>平均步数: {fo.avg}</p>
                        <p>最近活动: {fo.recentact}</p>
                    </div>

                    <div className={s.buttons}>
                        <RaisedButton
                            primary = {true}
                            labelColor="#FFF"
                            style={buttonStyle.commonButton}
                            labelStyle={buttonStyle.commonLabelStyle}
                            label="ta的主页"/>
                        <FlatButton
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.labelStyle}
                            label="取消关注" />
                    </div>
                </Paper>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default FollowingCard