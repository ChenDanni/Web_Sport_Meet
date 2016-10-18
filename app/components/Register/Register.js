/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import RegisterCard from '../RegisterCard/RegisterCard'


import './Register.scss'

class Register extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div  className="content">
                    <Navigation className="navigation"/>
                    <div className="container">
                        <RegisterCard/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Register