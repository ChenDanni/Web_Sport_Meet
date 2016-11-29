/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import s from './TopicCard.scss'
class TopicCard extends Component {
    render(){
        return(
            <div className={s.content}>
                <Avatar src={require("../../icons/avatar1.png")}/>
                <div className={s.topic_info}>
                    <p>帖子标题</p>
                    <div className={s.footer}>
                        <p>name</p>
                        <p>发布时间: 2016-11-3</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopicCard;