import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailError: false,
            emailName: ''
        }
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onEmailChange(event) {
        this.setState({
            emailName: event.target.value
        });
    }

    isValidEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test( this.state.emailName);
    }

    onLoginSubmit() {
        if (this.isValidEmail()) {
            this.setState({
                emailError: false
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }

    render() {
        return (
            <div className="login_form">
                <div className="user_input">
                    <TextField onChange={this.onEmailChange} className="input" label="Email" variant="outlined"/>
                    {this.state.emailError ? <label className="email_error_text">Email is not valid</label> : ''}
                </div>
                <div className="user_input">
                    <TextField className="input" label="Password" variant="outlined"/>
                </div>
                <div>
                    <Button 
                        onClick={this.onLoginSubmit}
                        variant="contained"
                        color="primary">Login
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login;