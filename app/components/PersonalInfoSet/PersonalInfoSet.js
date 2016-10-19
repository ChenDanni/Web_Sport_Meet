/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../Navigation/Navigation'
import PersonalInfoSetCard from '../PersonalInfoSetCard/PersonalInfoSetCard'
import PersonalInfoCard from '../PersonalInfoCard/PersonalInfoCard'
import Divider from 'material-ui/Divider';

import './PersonalInfoSet.scss'

class PersonalInfoSet extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div  className="content">
                    <Navigation className="navigation"/>
                    <div className="container">
                        <PersonalInfoSetCard/>
                    </div>
                    <PersonalInfoCard/>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default PersonalInfoSet