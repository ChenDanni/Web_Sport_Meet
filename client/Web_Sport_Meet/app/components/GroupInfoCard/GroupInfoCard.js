/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TopicCard from '../TopicCard/TopicCard'
import MemberCard from '../MemberCard/MemberCard'
import s from './GroupInfoCard.scss'
class GroupInfoCard extends Component{
    render(){
        return(
            <div>
                <Paper>
                    <div className={s.group_title}>
                        <Avatar src={require("../../icons/avatar1.png")}/>
                        <p>小组1</p>
                        <p>创建者: cdn</p>
                        <p>创建时间: 2016-11-3</p>
                    </div>
                    <Divider/>
                    <div className={s.group_info}>
                        <p>成员数: 23</p>
                        <p>Level.3</p>
                        <p>累计步数: 463672</p>
                    </div>
                    <p>description</p>
                    <Divider/>
                    <div className={s.content}>
                        <div>
                            <p>帖子</p>
                            <div>

                                <TopicCard/>
                            </div>
                        </div>
                        <div>
                            <div className={s.member_title}>
                                <p>排名</p>
                                <p>成员</p>
                            </div>
                            <div>
                                <MemberCard/>
                            </div>



                        </div>
                    </div>



                </Paper>
            </div>
        );
    }
}
export default GroupInfoCard;