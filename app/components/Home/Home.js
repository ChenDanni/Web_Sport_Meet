/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import HomeLeftMenu from '../HomeLeftMenu/HomeLeftMenu'
import HomeDataCard from '../HomeDataCard/HomeDataCard'
import FriendsCard from '../FriendsCard/FriendsCard'
import GroupCard from '../GroupCard/GroupCard'
import FollowingCard from '../FollowingCard/FollowingCard'
import FollowerCard from '../FollowerCard/FollowerCard'

import './Home.scss'

class Home extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div  className="content">
                    <Navigation className="navigation"/>
                    <div>
                        <HomeLeftMenu/>
                        <FriendsCard/>
                        <FollowerCard/>
                        <FollowingCard/>
                    </div>
                    <HomeDataCard/>

                    <GroupCard/>


                </div>
            </MuiThemeProvider>
        );
    }
}

export default Home