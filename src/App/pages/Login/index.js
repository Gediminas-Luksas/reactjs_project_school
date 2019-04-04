import React, {Component} from 'react';
import {login} from '../../functions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then(res => {
      if (res) {
        this.props.history.replace('/');
      }
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
              <span className="login100-form-title p-b-34 p-t-27">Log in</span>

              <div className="wrap-input100 validate-input" data-validate="Enter Email">
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />

                <span className="focus-input100" data-placeholder="&#xf207;" />
              </div>

              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />

                <span className="focus-input100" data-placeholder="&#xf191;" />
              </div>

              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
