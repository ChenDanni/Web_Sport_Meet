/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import Navigation from '../Navigation/Navigation'
import ActivityLeftMenu from '../ActivityLeftMenu/ActivityLeftMenu'
import ActivityCard from '../ActivityCard/ActivityCard'
import Search from '../Search/Search'
import s from './Activity.scss'
import {newTheme} from '../../theme'
import $ from 'jquery';

class Activity extends Component{

    constructor(props){
        super(props);
        this.state = {
            left_info: ""
        }
    }
    async componentDidMount() {
        let left_info = {"username":"jhsjag"};

        $.ajax('http://localhost:1024/public/activity/left_info', {async: false})
            .done(((left_data) => {
                left_info = left_data;
            }).bind(this));
        this.setState({left_info:left_info});
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>
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
                            <ActivityCard/>
                            <ActivityCard/>
                            <ActivityCard/>
                            <ActivityCard/>
                        </div>
                    </div>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default Activity