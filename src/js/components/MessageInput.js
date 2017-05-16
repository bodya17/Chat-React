import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}

class MessageInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msgText: ''
        }
    }

    componentDidMount() {
        let ta = document.querySelector('textarea[name=message_input]')
        ta.addEventListener('keydown', (e) => {
        	 if (e.keyCode == 13 && !e.shiftKey) {
                this.props.onSendClick(this.state.msgText)
                this.setState({msgText: ''})
                e.preventDefault()
            } 
        })
    }
    
    render() {
        return (
            <div>
                <TextField
                    name="message_input"
                    type="text"
                    ref="message"
                    value={this.state.msgText}
                    multiLine={true}
                    onChange={(e) => this.setState({msgText: e.target.value})}
                    style={{width: '100%'}}
                />

                {/*<RaisedButton
                    label="Send"
                    primary={true}
                    onClick={() => {
                        this.props.onSendClick(this.refs.message.input.value)
                        this.refs.message.input.value = ""
                    }}
                />*/}
            </div>
        )
    }
}

export default MessageInput