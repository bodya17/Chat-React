import React, { Component, PureComponent } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';

class UserList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: ''
        }
    }

    render() {
        let greenCircle = <div style={{
                width: '10px', height: '10px',
                backgroundColor: 'rgb(66, 183, 42)',
                position: 'relative',
                top: '25%',
                left: '25%', 
                borderRadius: '50%'
            }}></div>

        console.log('Userlist rerender');

        const userList = this.props.users.filter(u => u.username.includes(this.state.filterValue)).map((user, i) => (
            <div ref={'user'+i}>
                <ListItem
                    key={user._id}
                    //style={this.state.active ? {backgroundColor: 'rgba(165,89,0,0.2)'} : null}
                    primaryText={user.username}
                    leftAvatar={<Avatar src={user.fileContent} />}
                    rightIcon={user.status == 'on' ? <Avatar style={{backgroundColor: 'none'}}>{greenCircle}</Avatar> : null}
                    onTouchTap={() => {
                        this.props.getMessagesOf(user._id)
                        if (this.active)
                            this.active.style.backgroundColor = ""
                        this.active = this.refs['user'+i]
                        this.refs['user'+i].style.backgroundColor = '#FF8DB4'
                    }}
                >
                </ListItem>
            </div>
        ));
        return (
            <div class="user-list">
                <br />
                <div style={{textAlign: 'center'}}>
                    <TextField
                        name="search"
                        hintText="Search..."
                        style={{width: '50%'}}
                        onChange={(e) => this.setState({filterValue: e.target.value})}
                    />
                </div>
                <List>
                    {userList}
                </List>
            </div>
        );
    }
}

export default UserList;