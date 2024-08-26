import {Component} from 'react'
import {GoogleLogin} from 'react-google-login'
import {BiLogoGmail} from 'react-icons/bi'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {email: ''}

  responseGoogle = response => {
    console.log(response)

    if (response.ok === true) {
      ;<Redirect to="/" />
    }
  }

  render() {
    const {email} = this.state
    return (
      <div>
        <div className="main-logo-container">
          <div className="header-container">
            <BiLogoGmail fill="#ffffff" />
            <h1 className="logo-heading">REACHINBOX</h1>
          </div>
          <div className="main-container">
            <div className="form-container">
              <h1 className="main-heading">Create a new account</h1>
              <GoogleLogin
                clientId={email}
                buttonText="Sign up with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy="single_host_origin"
              />
              <br />
              <button className="button" type="submit">
                Craete an Account
              </button>
              <p>
                Already have an account?<span>Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
