/**
 * Created by user on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import LoginCard from '../../components/LoginCard/LoginCard'

import {newTheme} from '../../theme'
import s from './Login.scss'

class Login extends Component{

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>

                <div>
                    {/*<Image source={require('../../icons/back.png')} style={{backgroundColor:'transparent'}}>*/}
                        {/*<Text >1111</Text>*/}
                    {/*</Image>*/}
                    <Navigation/>
                    <div className={s.container}>
                        <LoginCard/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login