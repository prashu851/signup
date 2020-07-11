import React from 'react'
import './Signup.css'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import Button from '@material-ui/core/Button'

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.options = countryList().getData()
        this.state = {
            options: this.options,
            value: null,
          }
    }
    changeHandler = value => {
        this.setState({ value })
      }
    render(){
        return(
            <React.Fragment>
                <h1>Sign Up</h1>
            <div className="container">
                <form className="box">
                    <div className="user_input">
                        <TextField className="input" label="Full Name" variant="outlined" />
                    </div>
                    <div className="user_input">
                        <TextField className="input" label="Email" variant="outlined" required />
                    </div>
                    <div className="user_input">
                        <TextField className="input" label="Password" variant="outlined" />
                    </div>
                    <div className="user_input">
                        <Select className="select_country" labelId="Country" variant="outlined" options={this.state.options} value={this.state.value} onChange={this.changeHandler} />
                    </div>
                    <div className="user_input">
                        <PhoneInput inputClass="phone_input" buttonClass="dropdown" country={'us'} value={this.state.phone} onChange={phone => this.setState({ phone })} />
                    </div>
                    <div className="submit_input">
                    <Button className="submit" variant="contained" color="primary">Sign Up</Button>
                    </div>
                </form>

            </div>
            </React.Fragment>
        )
    }
}
export default Signup;