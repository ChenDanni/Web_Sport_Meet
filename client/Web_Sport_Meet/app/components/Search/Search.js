/**
 * Created by user on 16/10/19.
 */
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
class Search extends Component{
    render(){
        return(
            <div>
                <TextField
                    hintText="find something you like..."
                />
                <IconButton>
                    <ActionSearch
                        color='#ffffff'
                    />
                </IconButton>
            </div>
        );
    }
}
export default Search