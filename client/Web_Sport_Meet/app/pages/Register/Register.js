/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import RegisterCard from '../../components/RegisterCard/RegisterCard'
import {newTheme} from '../../theme'


import s from './Register.scss'

class Register extends Component{

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>
                <div>
                    <Navigation/>
                    <div className={s.container}>
                        <RegisterCard/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Register