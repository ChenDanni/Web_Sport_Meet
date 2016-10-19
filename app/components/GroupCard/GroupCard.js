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

import './GroupCard.scss'


class GroupCard extends Component{
    render(){
        return(
            <div className="group-card-container">
                <Card>
                    <CardHeader
                        title="groupname"
                        subtitle="6756人"
                        avatar={require("../../icons/avatar1.png")}
                    />
                    <Divider/>
                    <CardText>
                        group description group description group description group description group group description description group description group description group description
                    </CardText>
                    <CardActions>
                        <FlatButton label="退出" />
                    </CardActions>
                </Card>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default GroupCard