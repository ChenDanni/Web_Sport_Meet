/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import Avatar from 'material-ui/Avatar';
import ReactEcharts from 'echarts-for-react';
import s from './Header.scss'

let option1 = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',
        '21','22','23','0','1','2','3']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'步数',
            type:'line',
            stack: '总量',
            data:[0,0,0,0,0,0,0,0, 182, 191, 234, 1233, 0, 3242,3221, 330, 10, 310, 310, 0, 0, 0, 0, 0]
        }
    ]
};

const style = {
    height:'200px',
    width:'700px',
    marginBottom:'30px'
};

class Header extends Component{


    render(){
        return(
            <div className={s.header}>
                <div className={s.content}>
                    <div className={s.avatar}>
                        <Avatar
                            size={110}
                            src={require("../../../icons/avatar1.png")}/>

                    </div>
                    <div className={s.info}>
                        <p>ChenDanni</p>
                        <p>Lv. 3</p>
                    </div>
                    {/*<div>*/}
                    {/*<ReactEcharts*/}
                    {/*style={style}*/}
                    {/*option={option1}*/}
                    {/*/>*/}
                    {/*</div>*/}
                </div>


            </div>
        );
    }

}

export default Header