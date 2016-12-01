/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ReactEcharts from 'echarts-for-react';
import s from './HomeDataCard.scss'
let daydata = {
    title: {
        text: '   24小时数据'
    },
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

let otherdata = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['游泳','散步','跑步']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'游泳',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'散步',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'跑步',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        }
    ]
};

class HomeDataCard extends Component{
    render(){
        return(
            <div>
                <Paper className={s.card}>
                    <ReactEcharts
                        option={daydata}
                    />
                </Paper>
                <Paper className={s.card}>
                    <ReactEcharts
                        option={otherdata}
                    />
                </Paper>
            </div>

        );
    }
}

// export default withStyles(LoginCard,s);
export default HomeDataCard