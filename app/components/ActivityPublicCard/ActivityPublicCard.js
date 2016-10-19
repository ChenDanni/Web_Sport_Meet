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


import './ActivityPublicCard.scss'

const style={
    width:'450px',
    // height: '500px',
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

class ActivityPublicCard extends Component{
    render(){
        return(
            <Card style={style}>
                <CardTitle title="发布活动"/>
                <TextField
                    hintText="活动名称"
                    floatingLabelText="活动名称"
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="活动介绍"
                    floatingLabelText="活动介绍"
                    multiLine={true}
                    fullWidth={true}
                    rows={3}
                /><br />
                <div>
                    <DatePicker hintText="开始时间" container="inline" />
                    至
                    <DatePicker hintText="结束时间" container="inline" />
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
                <RaisedButton label="确认" primary={true}/>
                <RaisedButton label="取消"/>
            </Card>
        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityPublicCard