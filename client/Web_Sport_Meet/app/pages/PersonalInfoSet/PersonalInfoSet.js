/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import PersonalInfoSetCard from '../../components/PersonalInfoSetCard/PersonalInfoSetCard'
import {newTheme} from '../../theme'

import s from './PersonalInfoSet.scss'

class PersonalInfoSet extends Component{

    render(){
        return(
            <MuiThemeProvider muiTheme={newTheme}>
                <div>
                    <Navigation/>
                    <div className={s.container}>
                        <PersonalInfoSetCard/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default PersonalInfoSet