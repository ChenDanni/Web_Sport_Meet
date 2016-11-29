/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import AvatarInfo from '../AvatarInfo/AvatarInfo'

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

class GroupCard extends Component{
    render(){
        return(
            <div className={s.card}>
                <Card>
                    <div className={s.header}>
                        <AvatarInfo/>
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
                            label="退出" />
                    </div>
                </Card>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default GroupCard