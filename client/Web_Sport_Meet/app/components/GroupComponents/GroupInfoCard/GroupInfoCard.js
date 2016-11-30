/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TopicCard from '../TopicCard/TopicCard'
import MemberCard from '../../MemberCard/MemberCard'
import s from './GroupInfoCard.scss'
class GroupInfoCard extends Component{
    constructor(props){
        super(props);
    }

    renderTopicList(){
        if (this.props.group_detail.topics != undefined){
            return this.props.group_detail.topics.map(function(topic,i){
                return (
                    <TopicCard
                        key = {i}
                        topic_info = {topic}
                    />
                )
            });
        }
    }
    renderUserList(){
        if (this.props.group_detail.users != undefined){
            return this.props.group_detail.users.map(function(member,i){
                return (
                    <MemberCard
                        key = {i}
                        member_info = {member}
                    />
                )
            });
        }
    }
    render(){
        let detail = this.props.group_detail;
        return(
            <div>
                <Paper>
                    <div className={s.group_title}>
                        <Avatar src={detail.avatar}/>
                        <p>{detail.groupname}</p>
                        <p>创建者: {detail.creater}</p>
                        <p>创建时间: {detail.createtime}</p>
                    </div>
                    <Divider/>
                    <div className={s.group_info}>
                        <p>成员数: {detail.membernum}</p>
                        <p>Level.{detail.level}</p>
                        <p>累计步数: {detail.totalsteps}</p>
                    </div>
                    <p>{detail.description}</p>
                    <Divider/>
                    <div className={s.content}>
                        <div>
                            <p>帖子</p>
                            <div>
                                {this.renderTopicList()}
                            </div>
                        </div>
                        <div>
                            <div className={s.member_title}>
                                <p>排名</p>
                                <p>成员</p>
                                <p>步数</p>
                            </div>
                            <div>
                                {this.renderUserList()}
                            </div>



                        </div>
                    </div>



                </Paper>
            </div>
        );
    }
}
export default GroupInfoCard;