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
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

import './PersonalInfoCard.scss'

const buttonStyle = {
    marginTop: '10px',
    marginBottom: '10px'
};

class PersonalInfoCard extends Component{
    render(){
        return(
            <Paper className="card">
                <div>
                    <Avatar src={require("../../icons/avatar1.png")} />
                    User name
                </div>
                <CardText>
                    性别: 女
                </CardText>
                <CardText>
                    邮箱: 87867@g.com
                </CardText>
                <CardText>
                    手机: ***********
                </CardText>
                <CardText>
                    爱好: 啥
                </CardText>
                <CardText>
                    生日: 1996-02-03
                </CardText>
                <CardText>
                    所在地: Nanjing, China
                </CardText>

                <RaisedButton label="加为好友" primary={true} style={buttonStyle} fullWidth={true} />
                <RaisedButton label="关注" primary={true} style={buttonStyle} fullWidth={true} />
            </Paper>
        );
    }
}
// export default withStyles(LoginCard,s);
export default PersonalInfoCard