import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header-container" className="fullwidth">
      <div id="header">
        <div className="container">
          <div className="left-side">
            <div id="logo">
              <Link to="/">
                <img src="/images/hire_logo_dark.png" alt="" />
              </Link>
            </div>

            <nav style={{ zIndex: 1001 }} id="navigation">
              <ul id="responsive">
                <li>
                  <Link to="#">Home</Link>
                  <ul className="dropdown-nav">
                    <li>
                      <Link to="/">Feed</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="#" className="current">
                    Find Work
                  </Link>
                  <ul className="dropdown-nav">
                    <li>
                      <Link to="/jobs">Browse Jobs</Link>
                    </li>
                    {/*<li>*/}
                    {/*<Link to="/tasks">Browse Tasks</Link>*/}
                    {/*</li>*/}
                    <li>
                      <Link to="/companies">Browse Companies</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="#">For Employers</Link>
                  <ul className="dropdown-nav">
                    {/*<li>*/}
                    {/*<Link to="#">Find a Freelancer</Link>*/}
                    {/*</li>*/}
                    {/*<li><Link to="single-freelancer-profile.html">Freelancer Profile</Link></li>*/}
                    <li>
                      <Link to="/signin">Post a Job</Link>
                    </li>
                    {/*<li><Link to="dashboard-post-a-task.html">Post a Task</Link></li>*/}
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="clearfix"></div>
          </div>

          <div className="right-side">
            <nav style={{ zIndex: 1001 }} id="navigation">
              <ul id="responsive">
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>

                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
              </ul>
            </nav>
            <div className="clearfix"></div>

            <span className="mmenu-trigger">
              <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
