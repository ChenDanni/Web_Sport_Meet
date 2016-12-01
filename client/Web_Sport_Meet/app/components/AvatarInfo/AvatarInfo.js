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
                <Avatar
                    size={40}
                    src={this.props.avatar}/>
                <div className={s.info}>
                    <p>{this.props.username} Lv.{this.props.level}</p>
                    <p style={subtitleStyle}>{this.props.joinat}加入</p>
                </div>
            </div>
        );
    }
}

export default AvatarInfo