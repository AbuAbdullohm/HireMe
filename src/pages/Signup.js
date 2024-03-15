import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-5 offset-xl-3">

                    <div className="login-register-page">
                        <div className="welcome-text">
                            <h3>Let's create your account!</h3>
                            <span>Already have an account? <a href="pages-login.html">Log In!</a></span>
                        </div>

                        <div className="account-type">
                            <div>
                                <input type="radio" name="account-type-radio" id="freelancer-radio"
                                       className="account-type-radio" checked/>
                                <label htmlFor="freelancer-radio" className="ripple-effect-dark"><i
                                    className="icon-material-outline-account-circle"></i> Employee</label>
                            </div>

                            <div>
                                <input type="radio" name="account-type-radio" id="employer-radio"
                                       className="account-type-radio"/>
                                <label htmlFor="employer-radio" className="ripple-effect-dark"><i
                                    className="icon-material-outline-business-center"></i> Employer</label>
                            </div>
                        </div>

                        <form method="post" id="register-account-form">
                            <div className="input-with-icon-left">
                                <i className="icon-material-baseline-mail-outline"></i>
                                <input type="text" className="input-text with-border" name="emailaddress-register"
                                       id="emailaddress-register" placeholder="Email Address" required/>
                            </div>

                            <div className="input-with-icon-left" title="Should be at least 8 characters long"
                                 data-tippy-placement="bottom">
                                <i className="icon-material-outline-lock"></i>
                                <input type="password" className="input-text with-border" name="password-register"
                                       id="password-register" placeholder="Password" required/>
                            </div>

                            <div className="input-with-icon-left">
                                <i className="icon-material-outline-lock"></i>
                                <input type="password" className="input-text with-border"
                                       name="password-repeat-register" id="password-repeat-register"
                                       placeholder="Repeat Password" required/>
                            </div>
                        </form>

                        <button className="button full-width button-sliding-icon ripple-effect margin-top-10"
                                type="submit" form="login-form">Register <i
                            className="icon-material-outline-arrow-right-alt"></i></button>

                        <div className="social-login-separator"><span>or</span></div>
                        <div className="social-login-buttons">
                            <button className="facebook-login ripple-effect"><i
                                className="icon-brand-facebook-f"></i> Register via Facebook
                            </button>
                            <button className="google-login ripple-effect"><i
                                className="icon-brand-google-plus-g"></i> Register via Google+
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default Signup;
