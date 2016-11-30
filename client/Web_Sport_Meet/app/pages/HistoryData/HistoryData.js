/**
 * Created by user on 16/10/21.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/HomeComponents/Header/Header'
import HomeLeftMenu from '../../components/HomeComponents/HomeLeftMenu/HomeLeftMenu'
import HistroyDataCard from '../../components/HomeComponents/HistoryDataCard/HistoryDataCard'


import ss from './HistoryData.scss'

class HistroyData extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <Header/>

                    <div className={ss.content}>
                        <HomeLeftMenu/>

                        <div className={ss.container}>
                            <HistroyDataCard/>
                        </div>
                    </div>


                </div>
            </MuiThemeProvider>
        );
    }
}

export default HistroyData