/**
 * Created by user on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import { Router, Route, Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import GroupCard from '../GroupCard/GroupCard'
import MyGroupList from '../../MyGroupList/MyGroupList'
import GroupInfoCard from '../GroupInfoCard/GroupInfoCard'
import s from './GroupCenterLeftMenu.scss'
import $ from 'jquery'

const tabStyle = {
    padding:'0 14px',
    backgroundColor:'#C7801D'
};
class GroupCenterLeftMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'mine',
            group_name:[],
            group_detail:{}
        };
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        let group_name = [];
        let group_detail = {};

        $.ajax('http://localhost:1024/public/groups/my_groups', {async: false})
            .done(((name_data) => {
                group_name = name_data;
            }).bind(this));
        this.setState({group_name:group_name});
        $.ajax('http://localhost:1024/public/groups/my_group_detail', {async: false})
            .done(((group_data) => {
                group_detail = group_data;
            }).bind(this));
        this.setState({group_detail:group_detail});
    }

    handleChange (value) {
        this.setState({
            value: value,
        });
    };
    render(){
        return(
            <div>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab
                        style={tabStyle}
                        label="我的" value="mine" >

                    </Tab>
                    <Tab
                        style={tabStyle}
                        label="发现" value="finding">
                        <div>
                            <GroupCard/>
                            <GroupCard/>
                        </div>
                    </Tab>
                </Tabs>
            </div>

        );
    }
}

export default GroupCenterLeftMenu