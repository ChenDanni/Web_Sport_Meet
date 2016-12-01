/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import ActivityCardHead from '../ActivityCardHead/ActivityCardHead'
import JoinActivityInfoCard from '../JoinActivityInfoCard/JoinActivityInfoCard'
import s from './MyJoinActivityCard.scss'
import $ from 'jquery'

const labelStyle={
    color:'#9B9B9B'
};

class MyJoinActivityCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            act_detail:{}
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    async componentDidMount() {
        let act_detail = {};

        $.ajax('http://localhost:1024/public/activity/my_join_act_detail', {async: false, data:{id: this.props.id}})
            .done(((act_detail_data) => {
                act_detail = act_detail_data;
            }).bind(this));
        this.setState({act_detail:act_detail});

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
                primary={true}
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
                    <ActivityCardHead
                        act_info = {this.props.act_info}
                    />
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
                    <JoinActivityInfoCard
                        act_detail = {this.state.act_detail}
                    />
                </Dialog>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default MyJoinActivityCard