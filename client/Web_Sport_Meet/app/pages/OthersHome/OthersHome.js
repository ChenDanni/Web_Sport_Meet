/**
 * Created by chendanni on 16/11/30.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import HomeLeftMenu from '../../components/OthersHomeComponents/OthersHomeLeftMenu/OthersHomeLeftMenu'
import OthersHeader from '../../components/OthersHomeComponents/OthersHeader/OthersHeader'
import OthersHistoryDataCard from '../../components/OthersHomeComponents/OthersHistoryDataCard/OthersHistoryDataCard'
import s from './OthersHome.scss'

class OthersHome extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <div>
                        <OthersHeader/>
                    </div>


                    <div className={s.content}>
                        <HomeLeftMenu/>
                        <div className={s.container}>
                            <OthersHistoryDataCard/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default OthersHome