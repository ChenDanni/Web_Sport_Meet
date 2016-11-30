/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import s from './ActivityCardHead.scss'

class ActivityCardHead extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        let act = this.props.act_info;
        return(
            <div>
                <div className={s.title}>
                    <p>{act.title}</p>
                    <p className={s.author}>from {act.author}</p>
                </div>
                <div className={s.title}>
                    <p>{act.description}</p>
                </div>
                <div className={s.container}>
                    <div className={s.item}>
                        <Avatar src={require("../../../icons/avatar1.png")} />
                        <p>已参与 {act.join} 人</p>
                    </div>
                    <div className={s.item}>
                        <Avatar src={require("../../../icons/start.jpg")} />
                        <p>{act.start}</p>
                    </div>
                    <div className={s.item}>
                        <Avatar src={require("../../../icons/end.jpg")} />
                        <p>{act.end}</p>
                    </div>
                </div>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default ActivityCardHead