import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-top-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-rows-container">
                <div className="footer-rows-left">
                  <div className="footer-row">
                    <div className="footer-row-inner footer-logo">
                      <img src="images/hire_logo_light.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="footer-rows-right">
                  <div className="footer-row">
                    <div className="footer-row-inner">
                      <ul className="footer-social-links">
                        <li>
                          <a
                            href="http://facebook.com/rteco.llc"
                            title="Facebook"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <i className="icon-brand-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://t.me/rteco"
                            title="Telegram"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <i className="icon-brand-telegram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/rteco1"
                            title="Twitter"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <i className="icon-brand-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://linkedin.com/rteco"
                            title="LinkedIn"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <i className="icon-brand-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                  </div>

                  {/*<div className="footer-row">*/}
                  {/*<div className="footer-row-inner">*/}
                  {/*<select className="selectpicker language-switcher" data-selected-text-format="count" data-size="5" defaultValue={1}>*/}
                  {/*<option value={0}>English</option>*/}
                  {/*<option value={1}>Français</option>*/}
                  {/*<option value={2}>Español</option>*/}
                  {/*<option value={3}>Deutsch</option>*/}
                  {/*</select>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>For Candidates</h3>
                <ul>
                  <li>
                    <Link to="/jobs">
                      <span>Browse Jobs</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/companies">
                      <span>Browse Companies</span>
                    </Link>
                  </li>
                  {/*<li><Link to="/resume/add"><span>Add Resume</span></Link></li>*/}
                  {/*<li><Link to="/job/alerts"><span>Job Alerts</span></Link></li>*/}
                  <li>
                    <Link to="/job/bookmarks">
                      <span>My Bookmarks</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>For Employers</h3>
                <ul>
                  {/*<li><Link to="#"><span>Browse Candidates</span></Link></li>*/}
                  <li>
                    <Link to="/signin">
                      <span>Post a Job</span>
                    </Link>
                  </li>
                  {/*<li><Link to="#"><span>Post a Task</span></Link></li>*/}
                  {/*<li><Link to="#"><span>Plans & Pricing</span></Link></li>*/}
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>Helpful Links</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>Terms of Use</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="footer-links">
                <h3>Account</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <span>Sign in</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>My Account</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <h3>
                <i className="icon-feather-mail"></i> Sign Up For a Newsletter
              </h3>
              <p>
                Weekly breaking news, analysis and cutting edge advices on job
                searching.
              </p>
              <form action="#" method="get" className="newsletter">
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your email address"
                />
                <button type="submit">
                  <i className="icon-feather-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              © 2024{" "}
              <a href="https://rteco.uz">
                <strong>rteco</strong>
              </a>
              . All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
