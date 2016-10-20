/**
 * Created by chendanni on 16/10/19.
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


import s from './ActivityPublicCard.scss'

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

class ActivityPublicCard extends Component{
    render(){
        return(
            <Card className={s.card}>
                <p className={s.title}>发布活动</p>
                <TextField
                    className={s.text}
                    hintText="活动名称"
                    fullWidth={true}
                /><br/>
                <TextField
                    className={s.text}
                    hintText="活动介绍"
                    multiLine={true}
                    fullWidth={true}
                    rows={4}
                /><br />
                <div className={s.date}>
                    <DatePicker
                        className={s.dateSelect}
                        hintText="开始时间"
                        container="inline" />
                    <p>至</p>
                    <DatePicker
                        className={s.dateSelect}
                        hintText="结束时间"
                        container="inline" />
                </div>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
                        value="对所有人开放"
                        label="对所有人开放"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="仅对好友开放"
                        label="仅对好友开放"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <div className={s.buttons}>
                    <RaisedButton
                        backgroundColor="#965200"
                        labelColor="#FFF"
                        className={s.button}
                        label="确认"/>
                    <RaisedButton className={s.button} label="取消"/>
                </div>
            </Card>
        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityPublicCard