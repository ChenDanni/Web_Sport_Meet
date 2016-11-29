/**
 * Created by chendanni on 16/10/19.
 */
import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ActivityCardHead from '../ActivityCardHead/ActivityCardHead'
import ActivityInfoCard from '../ActivityInfoCard/ActivityInfoCard'
import {render} from 'react-dom';
import $ from 'jquery';
import s from './ActivityCard.scss'

const labelStyle={
    color:'#9B9B9B'
};

class ActivityCard extends Component {
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

    render() {
        const actions = [
            <FlatButton
                label="取消"
                labelStyle={labelStyle}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                backgroundColor="#965200"
                labelColor="#FFF"
                style={{marginLeft:'16px'}}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                label="参加"/>
        ];
        return (
            <div>
                <Paper
                    onTouchTap={this.handleOpen}
                    className={s.content}>
                    <ActivityCardHead/>
                </Paper>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <ActivityInfoCard/>
                </Dialog>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityCard