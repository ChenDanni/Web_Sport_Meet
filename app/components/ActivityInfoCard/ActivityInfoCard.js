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
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';


import './ActivityInfoCard.scss'

const style={
    width:'450px',
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

class ActivityInfoCard extends Component{
    render(){
        return(
            <Card style={style}>
                <CardTitle title="活动名称" subtitle="来自 chendanni" />
                <CardText>
                    活动介绍 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardText>
                    活动时间: 2016年10月20日 至 2016年10月30日
                </CardText>
                <CardText>
                    已参与 3 人
                </CardText>
                <List>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar src={require("../../icons/avatar1.png")} />
                        }
                    >
                        User1
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar src={require("../../icons/avatar1.png")} />
                        }
                    >
                        User2
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar src={require("../../icons/avatar1.png")} />
                        }
                    >
                        User3
                    </ListItem>
                </List>

                <RaisedButton label="加入" primary={true}/>
            </Card>
        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityInfoCard