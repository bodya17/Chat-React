import React, { Component } from 'react'
import { formWrapper, formStyles } from './formStyles'
import { TextField, RaisedButton } from 'material-ui'
import genImage from '../helpers/genImageFromLetter'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonDisabled: false,
            username: '',
            password: '',
            email: '',
            usernameErr: false,
            passwordErr: false,
            emailErr: false,
            passwordDirty: false,
            usernameDirty: false,
            emailDirty: false
        }
    }

    render() {
        let buttonDisabled =
            (this.state.passwordErr || this.state.usernameErr || this.state.emailErr) ||
            (!this.state.passwordDirty || !this.state.usernameDirty || !this.state.emailDirty)
        return (
            <div
                style={formWrapper}
                onKeyPress={(e) => {
                    if (e.charCode == 13) {
                        this.props.onSignupClick(this.state.username, this.state.email, this.state.password, genImage(this.state.username[0]))
                    }
                }}>
                <div class="form" style={formStyles}>
                    <TextField
                        name="username"
                        style={{width: '400px'}}
                        floatingLabelText="Username"
                        type="text"
                        errorText={this.state.usernameErr && "This field is required."}
                        defaultValue={this.state.username}
                        onChange={(e) => {
                            this.setState({
                                usernameErr: !e.target.value,
                                username: e.target.value,
                                usernameDirty: true
                            })
                        }}
                    />

                    <TextField
                        name="email"
                        style={{width: '400px'}}
                        floatingLabelText="Email"
                        type="email"
                        errorText={this.state.emailErr && "This field is required."}
                        defaultValue={this.state.email}
                        onChange={(e) => {
                            this.setState({
                                emailErr: !e.target.value,
                                email: e.target.value,
                                emailDirty: true
                            })
                        }}
                    />

                    <TextField
                        name="password"
                        style={{width: '400px', marginBottom: '20px'}}
                        floatingLabelText="Password"
                        type="password"
                        errorText={this.state.passwordErr && "This field is required."}
                        defaultValue={this.state.password}
                        onChange={(e) => {
                            this.setState({
                                passwordErr: !e.target.value,
                                password: e.target.value,
                                passwordDirty: true
                            })
                        }}
                    />

                    <RaisedButton label="Sign up"
                        name="sign-up_btn"
                        primary={true}
                        disabled={buttonDisabled}
                        onClick={() => {
                            this.props.onSignupClick(this.state.username, this.state.email, this.state.password, genImage(this.state.username[0]))
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Signup