/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

class MyGroupList extends Component{

    render(){
        return(
            <div>
                <Paper>

                    我的小组
                    <List>
                        <ListItem>
                            小组1
                        </ListItem>
                        <ListItem>
                            小组1
                        </ListItem>
                        <ListItem>
                            小组1
                        </ListItem>
                        <ListItem>
                            小组1
                        </ListItem>
                    </List>
                </Paper>
            </div>

        );
    }
}
export default MyGroupList;