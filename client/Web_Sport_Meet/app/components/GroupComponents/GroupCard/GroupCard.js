/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import AvatarInfo from '../../AvatarInfo/AvatarInfo'

import s from './GroupCard.scss'

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
const subtitleStyle = {
    fontSize: '14px',
    color: '#9B9B9B',
    marginTop: '8px'
};

class GroupCard extends Component{
    render(){
        return(
            <div className={s.card}>
                <Card>
                    <div className={s.header}>
                        {/*<AvatarInfo/>*/}
                        <div className={s.avatar}>
                            <Avatar
                                size={40}
                                src={require('../../../icons/start.jpg')}/>
                            <div className={s.infos}>
                                <p>au1 Lv.2</p>
                                <p style={subtitleStyle}>2016-10-23 创建</p>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <CardText className={s.text}>
                        爱跑步的少年聚集地,每天10km,坚持打卡~#百人百天#喜欢就来吧。爱跑步的少年聚集地,每天10km,坚持打卡~#百人百天#喜欢就来吧
                    </CardText>
                    <Divider/>
                    <div className={s.info}>
                        <p>成员数: 36</p>
                        <p>累计步数: 637268</p>
                    </div>
                    <div className={s.buttons}>
                        <FlatButton
                            style={buttonStyle.button}
                            labelStyle={buttonStyle.labelStyle}
                            label="加入" />
                    </div>
                </Card>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default GroupCard