/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/HomeComponents/Header/Header'
import HomeLeftMenu from '../../components/HomeComponents/HomeLeftMenu/HomeLeftMenu'
import FollowerCard from '../../components/HomeComponents/FollowerCard/FollowerCard'

import $ from 'jquery'
import s from './Followers.scss'

class Followers extends Component{

    constructor(props){
        super(props);
        this.state = {
            followers: []
        }
    }

    async componentDidMount() {
        let followers = [];

        $.ajax('http://localhost:1024/public/home/followers', {async: false})
            .done(((fo_data) => {
                followers = fo_data;
            }).bind(this));
        this.setState({followers:followers});
    }

    renderFollowersList(){
        return this.state.followers.map(function(fo,i){
            return (
                <FollowerCard
                    key = {i}
                    follower_info = {fo}
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
                            {this.renderFollowersList()}
                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Followers