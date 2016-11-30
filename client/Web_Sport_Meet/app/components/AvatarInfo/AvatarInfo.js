/**
 * Created by chendanni on 16/10/20.
 */
import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';

import s from './AvatarInfo.scss'

const subtitleStyle = {
    fontSize: '14px',
    color: '#9B9B9B',
    marginTop: '8px'
};

class AvatarInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={s.avatar}>
                <Avatar src={this.props.avatar}/>
                <div className={s.info}>
                    <p>{this.props.username}</p>
                    <p style={subtitleStyle}>level.{this.props.level}</p>
                </div>
            </div>
        );
    }
}

export default AvatarInfo