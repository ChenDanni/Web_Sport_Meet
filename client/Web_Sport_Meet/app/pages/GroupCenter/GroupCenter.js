/**
 * Created by user on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../../components/Navigation/Navigation'
import GroupCenterLeftMenu from '../../components/GroupComponents/GroupCenterLeftMenu/GroupCenterLeftMenu'
import Search from '../../components/Search/Search'
import { Router, Route, Link } from 'react-router';
import MyGroupList from '../../components/MyGroupList/MyGroupList'
import GroupInfoCard from '../../components/GroupComponents/GroupInfoCard/GroupInfoCard'
import FlatButton from 'material-ui/FlatButton';
import {newTheme} from '../../theme'
import s from './GroupCenter.scss'
import $ from 'jquery'

const linkStyle={
    color:'#ffffff',
    padding : '24px 24px 0 24px',
    lineHeight: '40px',
    verticalAlign:'button'
};

class GroupCenter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: 'mine',
            group_name:[],
            group_detail:{}
        };
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

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>
                <div>
                    <Navigation/>
                    <div className={s.searchContainer}>
                        <div>
                            <Link
                                style = {linkStyle}
                                className={s.link} to="/groups_center">我的</Link>
                            <Link
                                style = {linkStyle}
                                className={s.link} to="/groups_discover">发现</Link>
                        </div>
                        <Search/>
                    </div>
                    <div className={s.container}>
                        <div className={s.content}>
                            <MyGroupList
                                group_name = {this.state.group_name}
                            />
                            <GroupInfoCard
                                group_detail = {this.state.group_detail}
                            />
                        </div>

                    </div>

                </div>

            </MuiThemeProvider>
        );
    }
}

export default GroupCenter