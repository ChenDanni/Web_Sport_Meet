/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TopicCard from '../GroupComponents/TopicCard/TopicCard'
import s from'./MemberCard.scss'

class MemberCard extends Component {
    render(){
        let info = this.props.member_info;
        return(
            <div className={s.content}>
                <p>{info.rank}</p>
                <Avatar src={info.avatar}/>
                <p>{info.username}</p>
                <p>{info.step}</p>
            </div>
        );
    }
}
export default MemberCard;