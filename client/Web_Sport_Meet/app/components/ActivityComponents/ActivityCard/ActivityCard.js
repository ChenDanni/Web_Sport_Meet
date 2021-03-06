/**
 * Created by chendanni on 16/10/19.
 */
import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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
            open: false,
            act_detail:{}
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    async componentDidMount() {
        let act_detail = {};

        $.ajax('http://localhost:1024/public/activity/act_detail', {async: false, data:{id: this.props.id}})
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

    render() {
        const actions = [
            <FlatButton
                label="取消"
                labelStyle={labelStyle}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                primary={true}
                labelColor="#FFF"
                style={{marginLeft:'16px'}}
                onTouchTap={this.handleClose}
                label="参加"/>
        ];
        return (
            <div>
                <Paper
                    onTouchTap={this.handleOpen}
                    className={s.content}>
                    <ActivityCardHead
                        act_info = {this.props.act_info}
                    />
                </Paper>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <ActivityInfoCard
                        act_detail = {this.state.act_detail}
                    />
                </Dialog>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityCard