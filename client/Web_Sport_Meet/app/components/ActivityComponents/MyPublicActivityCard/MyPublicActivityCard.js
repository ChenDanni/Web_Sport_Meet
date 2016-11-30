/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import ActivityCardHead from '../ActivityCardHead/ActivityCardHead'

import s from './MyPublicActivityCard.scss'

const labelStyle={
    color:'#9B9B9B'
};

class MyPublicActivityCard extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Paper className={s.container}>
                <ActivityCardHead
                    act_info = {this.props.act_info}
                />
                <div className={s.buttons}>
                    <FlatButton
                        labelStyle={labelStyle}
                        label="编辑" />
                    <FlatButton
                        labelStyle={labelStyle}
                        label="删除" />
                </div>
            </Paper>
        );
    }
}

// export default withStyles(LoginCard,s);
export default MyPublicActivityCard