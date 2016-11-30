/**
 * Created by chendanni on 16/11/30.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/HomeComponents/Header/Header'
import HomeLeftMenu from '../../components/HomeComponents/HomeLeftMenu/HomeLeftMenu'
import HomeDataCard from '../../components/HomeComponents/HomeDataCard/HomeDataCard'
import s from './OthersHome.scss'

class OthersHome extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <div>
                        <Header/>
                    </div>


                    <div className={s.content}>
                        <HomeLeftMenu/>
                        <div className={s.container}>
                            <HomeDataCard/>
                        </div>
                    </div>


                </div>
            </MuiThemeProvider>
        );
    }
}

export default OthersHome