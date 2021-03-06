/**
 * Created by chendanni on 16/11/3.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import $ from 'jquery'
import Divider from 'material-ui/Divider';
import s from './MyGroupList.scss'
const labelStyle={
    color:'#9B9B9B'
};
class MyGroupList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };


    renderGroupNameList(){
        return this.props.group_name.map(function(name,i){
            return (
                <div key = {i}>
                    <ListItem>
                        {name}
                    </ListItem>
                    <Divider/>
                </div>
            )
        });
    }

    render(){
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                labelStyle={labelStyle}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                backgroundColor="#965200"
                labelColor="#FFF"
                style={{marginLeft:'16px'}}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                label="确认"/>
        ];
        return(
            <div>
                <Paper className={s.content}>
                    <p>我的小组</p>
                    <Divider/>
                    <List>
                        {this.renderGroupNameList()}
                        <RaisedButton
                            primary={true}
                            labelColor="#FFF"
                            style={{width:'100%'}}
                            onTouchTap={this.handleOpen}
                            label="创建小组"
                        />
                        <Dialog
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                        </Dialog>
                    </List>
                </Paper>
            </div>


        );
    }
}
export default MyGroupList;