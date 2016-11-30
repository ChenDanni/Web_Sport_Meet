/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import HomeLeftMenu from '../HomeLeftMenu/HomeLeftMenu'
import FollowingCard from '../FollowingCard/FollowingCard'

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
            <MuiThemeProvider>
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