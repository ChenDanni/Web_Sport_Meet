/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import s from './TopicCard.scss'
class TopicCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let info = this.props.topic_info;
        console.log(info);
        return(
            <div className={s.content}>
                <Avatar src={info.author_avatar}/>
                <div className={s.topic_info}>
                    <p>{info.title}</p>
                    <div className={s.footer}>
                        <p>{info.author}</p>
                        <p>发布时间: {info.public_time}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopicCard;