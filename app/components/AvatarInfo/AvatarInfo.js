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
    render(){
        return(
            <div className={s.avatar}>
                <Avatar src={require("../../icons/avatar1.png")}/>
                <div className={s.info}>
                    <p>name</p>
                    <p style={subtitleStyle}>level.3</p>
                </div>
            </div>
        );
    }
}

export default AvatarInfo