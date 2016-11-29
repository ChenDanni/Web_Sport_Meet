/**
 * Created by chendanni on 16/10/21.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';


import s from './JoinActivityInfoCard.scss'

const style={
    width:'680px',
    padding: '24px 14px'
};
const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

const listStyle = {
    padding:  '0 0px',
    margin: '0 auto',
    justifyContent:'center'
};

class JoinActivityInfoCard extends Component{
    render(){
        return(
            <div style={style}>
                <CardTitle title="活动名称" subtitle="来自 chendanni" />
                <CardText>
                    活动介绍 活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍 活动介绍 活动介绍 活动介绍
                </CardText>
                <Divider/>
                <CardText>
                    活动时间: 2016年10月20日 至 2016年10月30日
                </CardText>
                <CardText>
                    已参与 3 人
                </CardText>
                <List>
                    <ListItem style={listStyle}>
                        <div className={s.item}>
                            <p>排名</p>
                            <p>头像</p>
                            <p>用户</p>
                            <p>累计步数</p>
                        </div>
                    </ListItem>
                    <ListItem style={listStyle}>
                        <div className={s.item}>
                            <p>1</p>
                            <div>
                                <Avatar src={require("../../icons/avatar1.png")} />
                            </div>
                            <p>user1</p>
                            <p>65755</p>
                        </div>
                    </ListItem>
                    <ListItem style={listStyle}>
                        <div className={s.item}>
                            <p>2</p>
                            <div>
                                <Avatar src={require("../../icons/avatar1.png")} />
                            </div>
                            <p>user2</p>
                            <p>6575</p>
                        </div>
                    </ListItem>
                    <ListItem style={listStyle}>
                        <div className={s.item}>
                            <p>3</p>
                            <div>
                                <Avatar src={require("../../icons/avatar1.png")} />
                            </div>
                            <p>user3</p>
                            <p>15</p>
                        </div>
                    </ListItem>

                </List>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default JoinActivityInfoCard