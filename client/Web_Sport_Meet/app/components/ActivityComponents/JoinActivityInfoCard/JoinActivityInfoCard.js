/**
 * Created by chendanni on 16/10/21.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import s from './JoinActivityInfoCard.scss'

const style={
    width:'680px',
    padding: '24px 14px'
};
const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

const listStyle = {
    padding:  '0 0px',
    margin: '0 auto',
    justifyContent:'center'
};

class JoinActivityInfoCard extends Component{
    constructor(props) {
        super(props);
    }
    renderUserList(){
        return this.props.act_detail.users.map(function(user,i){
            return (
                <div key = {i}>
                    <ListItem style={listStyle}>
                        <div className={s.item}>
                            <p>{user.rank}</p>
                            <div>
                                {/*<Avatar src={user.avatar} />*/}
                                <Avatar src={require('../../../icons/avatar1.png')} />
                            </div>
                            <p>{user.name}</p>
                            <p>{user.avg}</p>
                        </div>
                    </ListItem>
                </div>
            )
        });
    }
    render(){
        let detail = this.props.act_detail;
        return(
            <div style={style}>
                <CardTitle title={detail.title} subtitle={"来自 " + detail.author} />
                <CardText>
                    {detail.description}
                </CardText>
                <Divider/>
                <CardText>
                    活动时间: {detail.start} 至 {detail.end}
                </CardText>
                <CardText>
                    已参与 {detail.join} 人
                </CardText>
                <List>
                    <ListItem style={listStyle}>
                        <div className={s.item}>
                            <p>排名</p>
                            <p>头像</p>
                            <p>用户</p>
                            <p>累计步数</p>
                        </div>
                    </ListItem>
                    {this.renderUserList()}
                </List>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default JoinActivityInfoCard