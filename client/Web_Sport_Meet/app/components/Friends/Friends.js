/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import HomeLeftMenu from '../HomeLeftMenu/HomeLeftMenu'
import FriendsCard from '../FriendsCard/FriendsCard'


import s from './Friends.scss'

class Friends extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <Header/>

                    <div className={s.content}>
                        <HomeLeftMenu/>
                        <div className={s.container}>
                            <FriendsCard/>
                            <FriendsCard/>
                            <FriendsCard/>
                            <FriendsCard/>
                        </div>
                    </div>


                </div>
            </MuiThemeProvider>
        );
    }
}

export default Friends