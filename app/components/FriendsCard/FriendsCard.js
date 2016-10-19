/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';

import './FriendsCard.scss'


class FriendsCard extends Component{
    render(){
        return(
            <div className="friends-card-container">
                <Card>
                    <CardHeader
                        className="friends-card-header"
                        title="好友名"
                        subtitle="Level.2"
                        avatar={require("../../icons/avatar1.png")}
                    />
                    <CardText>
                        group description group description group description group
                    </CardText>
                    <CardActions>
                        <FlatButton label="删除" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default FriendsCard