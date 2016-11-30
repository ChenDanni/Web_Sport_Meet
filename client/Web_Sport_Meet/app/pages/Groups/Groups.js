/**
 * Created by chendanni on 16/10/20.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/HomeComponents/Header/Header'
import HomeLeftMenu from '../../components/HomeComponents/HomeLeftMenu/HomeLeftMenu'
import GroupCard from '../../components/GroupComponents/GroupCard/GroupCard'


import s from './Groups.scss'

class Groups extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <Header/>

                    <div className={s.content}>
                        <HomeLeftMenu/>
                        <div className={s.container}>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                        </div>
                    </div>


                </div>
            </MuiThemeProvider>
        );
    }
}

export default Groups