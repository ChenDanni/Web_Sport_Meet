/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import HomeLeftMenu from '../HomeLeftMenu/HomeLeftMenu'


import './Home.scss'

class Home extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div  className="content">
                    <Navigation className="navigation"/>
                    <div>
                        <HomeLeftMenu/>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Home