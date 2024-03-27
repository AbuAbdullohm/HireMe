import React, { useState } from "react";
import CenteredLayout from "./../layouts/CenteredLayout";
import userActions from "./../actions/user.actions";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // constructor(props) {
  //     super(props);

  //     this.state = {
  //         email: '',
  //         password: '',
  //         submitted: false
  //     };

  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);

  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email && password) {
      userActions.signin(email, password);
    }
  };

  // handleChange(e) {
  //     const { name, value } = e.target;
  //     this.setState({[name]: value});
  // }

  // handleSubmit(e) {
  //     e.preventDefault();

  //     this.setState({submitted: true});
  //     const { email, password } = this.state;

  //     if (email && password) {
  //         userActions.signin(email,password);
  //     }
  // }

  return (
    <CenteredLayout>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">
            <div className="login-register-page">
              <div className="welcome-text">
                <h3>We're glad to see you again!</h3>
                <span>
                  Don't have an account? <Link to="/signup">Sign Up!</Link>
                </span>
              </div>

              <form method="post" id="login-form" onSubmit={handleSubmit}>
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input
                    type="text"
                    className="input-text with-border"
                    name="email"
                    id="emailaddress"
                    placeholder="Email Address"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input
                    type="password"
                    className="input-text with-border"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <Link to="#" className="forgot-password">
                  Forgot Password?
                </Link>
              </form>

              <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="submit"
                form="login-form"
              >
                Log In <i className="icon-material-outline-arrow-right-alt"></i>
              </button>

              <div className="social-login-separator">
                <span>or</span>
              </div>
              <div className="social-login-buttons">
                <button className="facebook-login ripple-effect">
                  <i className="icon-brand-facebook-f"></i> Log In via Facebook
                </button>
                <button className="google-login ripple-effect">
                  <i className="icon-brand-google"></i> Log In via
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CenteredLayout>
  );
};

export default Signin;
