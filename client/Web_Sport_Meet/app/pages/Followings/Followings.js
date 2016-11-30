/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import {newTheme} from '../../theme'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/HomeComponents/Header/Header'
import HomeLeftMenu from '../../components/HomeComponents/HomeLeftMenu/HomeLeftMenu'
import FollowingCard from '../../components/HomeComponents/FollowingCard/FollowingCard'

import $ from 'jquery'
import s from './Followings.scss'

class Followings extends Component{

    constructor(props){
        super(props);
        this.state = {
            followings: []
        }
    }
    async componentDidMount() {
        let followings = [];

        $.ajax('http://localhost:1024/public/home/followings', {async: false})
            .done(((fo_data) => {
                followings = fo_data;
            }).bind(this));
        this.setState({followings:followings});
    }

    renderFollowingsList(){
        return this.state.followings.map(function(fo,i){
            return (
            <FollowingCard
                key = {i}
                following_info = {fo}
            />
            )
        });
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>
                <div>
                    <Navigation/>
                    <Header/>

                    <div className={s.content}>
                        <HomeLeftMenu/>
                        <div className={s.container}>
                            {this.renderFollowingsList()}
                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Followings