/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AvatarInfo from '../../AvatarInfo/AvatarInfo'

import s from './FriendsCard.scss'

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
        padding:'0'
    }
};


class FriendsCard extends Component{
    render(){
        return(
            <div className={s.card}>
                <Card>
                    <div className={s.header}>
                        <AvatarInfo/>
                    </div>

                    <div>
                        <CardText style={infoStyle}>
                            平均步数: 5646
                        </CardText>
                        <CardText style={infoStyle}>
                            最近活动: 一起跑步吧
                        </CardText>
                    </div>

                    <div className={s.buttons}>
                        <FlatButton
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.labelStyle}
                            label="删除" />
                    </div>
                </Card>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default FriendsCard