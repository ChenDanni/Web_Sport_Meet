/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import ActivityCardHead from '../ActivityCardHead/ActivityCardHead'
import JoinActivityInfoCard from '../JoinActivityInfoCard/JoinActivityInfoCard'
import s from './MyJoinActivityCard.scss'

const labelStyle={
    color:'#9B9B9B'
};

class MyJoinActivityCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render(){
        const actions = [
            <FlatButton
                label="退出"
                primary={true}
                labelStyle={labelStyle}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                backgroundColor="#965200"
                labelColor="#FFF"
                style={{marginLeft:'16px'}}
                onTouchTap={this.handleClose}
                label="确认"/>
        ];
        return(
            <div>
                <Paper
                    onTouchTap={this.handleOpen}
                    className={s.container}>
                    <ActivityCardHead/>
                    <div className={s.buttons}>
                        <FlatButton
                            labelStyle={labelStyle}
                            label="退出" />
                    </div>
                </Paper>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <JoinActivityInfoCard/>
                </Dialog>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default MyJoinActivityCard