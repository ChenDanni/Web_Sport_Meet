/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import Avatar from 'material-ui/Avatar';
import ReactEcharts from 'echarts-for-react';
import s from './OthersHeader.scss'



const style = {
    height:'200px',
    width:'700px',
    marginBottom:'30px'
};

class OthersHeader extends Component{


    render(){
        return(
            <div className={s.header}>
                <div className={s.avatar}>
                    <Avatar
                        size={100}
                        src={require("../../../icons/team.jpg")}/>
                    <p>ChenDanni</p>
                </div>
                <div>
                    <p>Level.3</p>
                    <p>累计步数: 3628764</p>
                </div>

            </div>
        );
    }

}

export default OthersHeader