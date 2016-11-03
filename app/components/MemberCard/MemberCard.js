/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TopicCard from '../TopicCard/TopicCard'
import s from'./MemberCard.scss'

class MemberCard extends Component {
    render(){
        return(
            <div className={s.content}>
                <p>1</p>
                <Avatar src={require("../../icons/avatar1.png")}/>
                <p>member name</p>
            </div>
        );
    }
}
export default MemberCard;