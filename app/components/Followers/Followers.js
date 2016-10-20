/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import HomeLeftMenu from '../HomeLeftMenu/HomeLeftMenu'
import FollowerCard from '../FollowerCard/FollowerCard'


import s from './Followers.scss'

class Followers extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <Header/>

                    <div className={s.content}>
                        <HomeLeftMenu/>
                        <div className={s.container}>
                            <FollowerCard/>
                            <FollowerCard/>
                            <FollowerCard/>
                            <FollowerCard/>
                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Followers