/**
 * Created by chendanni on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../../components/Navigation/Navigation'
import ActivityLeftMenu from '../../components/ActivityComponents/ActivityLeftMenu/ActivityLeftMenu'
import MyJoinActivityCard from '../../components/ActivityComponents/MyJoinActivityCard/MyJoinActivityCard'
import Search from '../../components/Search/Search'
import s from './MyJoinActivity.scss'
import $ from 'jquery'

class MyJoinActivity extends Component{

    constructor(props){
        super(props);
        this.state = {
            left_info: {},
            act_list: []
        }
    }
    async componentDidMount() {
        let left_info = {};
        let act_list = [];

        $.ajax('http://localhost:1024/public/activity/left_info', {async: false})
            .done(((left_data) => {
                left_info = left_data;
            }).bind(this));
        this.setState({left_info:left_info});

        $.ajax('http://localhost:1024/public/activity/my_join_act_list', {async: false})
            .done(((act_data) => {
                act_list = act_data;
            }).bind(this));
        this.setState({act_list:act_list});
    }

    renderActivityList(){
        return this.state.act_list.map(function(act,i){
            return (
            <MyJoinActivityCard
                key = {i}
                act_info = {act}
                id = {act.id}
            />
            )
        });
    }

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <div className={s.searchContainer}>
                        <Search/>
                    </div>

                    <div className={s.content}>
                        <ActivityLeftMenu
                            left_info = {this.state.left_info}
                        />
                        <div className={s.activities}>
                            {this.renderActivityList()}
                        </div>
                    </div>

                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyJoinActivity