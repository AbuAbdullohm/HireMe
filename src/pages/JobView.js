import React, { useState, useEffect } from "react";
import CenteredLayout from "./../layouts/CenteredLayout";
import JobCardGridItem from "./../components/job/JobCardGridItem";
import { withRouter } from "react-router";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import axios from "axios";

const JobView = (props) => {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [data, setData] = useState([]);

  // `https://vacancy.hire.uz/v1/vacancies/${id}`

  const fetchData = async () => {
    let id = props.match.params.id;
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setIsLoaded(true);
  }, []);

  if (error) {
    return <div>Error {JSON.stringify(error)}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <CenteredLayout>
        <div
          className="single-page-header"
          data-background-image="/images/single-job.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-page-header-inner">
                  <div className="left-side">
                    <div className="header-image">
                      <Link to="single-company-profile.html">
                        {data.image !== "" ? (
                          <img src={data.image} alt="" />
                        ) : (
                          <img
                            src={"/images/company-logo-placeholder.png"}
                            alt=""
                          />
                        )}
                      </Link>
                    </div>
                    <div className="header-details">
                      <h3>{data.name}</h3>
                      <h5>{data.name}</h5>
                      <ul>
                        <li>
                          <Link to={"/companies/" + data.id}>
                            <i className="icon-material-outline-business"></i>{" "}
                            {data.name}
                          </Link>
                        </li>
                        <li>
                          <div className="star-rating" data-rating="4.9"></div>
                        </li>
                        {/*<li><img className="flag" src="/images/flags/gb.svg" alt=""/> {data.area.name}</li>*/}
                        <li>
                          <div className="verified-badge-with-title">
                            Verified
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="salary-box">
                      <div className="salary-type">Annual Salary</div>
                      <div
                        className="salary-amount"
                        style={{ "font-size": "20px" }}
                      >
                        {data.price != 0 ? data.price + " UZS" : ""}
                        {data.price != 0 ? " - " + data.price + " UZS" : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 content-right-offset">
              <div className="single-page-section">
                <h3 className="margin-bottom-25">Job Description</h3>
                <div>{data.description}</div>
              </div>

              <div className="single-page-section">
                <h3 className="margin-bottom-30">Location</h3>
                <div id="single-job-map-container">
                  <div
                    id="singleListingMap"
                    data-latitude="51.507717"
                    data-longitude="-0.131095"
                    data-map-icon="im im-icon-Hamburger"
                  ></div>
                  <Link to="#" id="streetView">
                    Street View
                  </Link>
                </div>
              </div>

              <div className="single-page-section">
                <h3 className="margin-bottom-25">Similar Jobs</h3>

                <div className="listings-container grid-layout">
                  <JobCardGridItem
                    id="1"
                    url={data.image}
                    name="PHP developer"
                    salary_from={10000000}
                    salary_to={20000000}
                    />

                  <JobCardGridItem
                    id="1"
                    url={data.image}
                    name="Web developer"
                    salary_from={10000000}
                    salary_to={20000000}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="sidebar-container">
                <Link
                  to="/signin"
                  className="apply-now-button popup-with-zoom-anim"
                >
                  Apply Now{" "}
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </Link>

                <div className="sidebar-widget">
                  <div className="job-overview">
                    <div className="job-overview-headline">Job Summary</div>
                    <div className="job-overview-inner">
                      <ul>
                        <li>
                          <i className="icon-material-outline-location-on"></i>
                          <span>Location</span>
                          <h5>{data.title}</h5>
                        </li>
                        <li>
                          <i className="icon-material-outline-business-center"></i>
                          <span>Job Type</span>
                          <h5>
                            {data.category == "" ? "Full time" : data.category}
                          </h5>
                        </li>
                        <li>
                          <i className="icon-material-outline-local-atm"></i>
                          <span>Salary</span>
                          <h5>
                            {data.price != 0 ? data.price + " UZS" : ""}
                            {data.price != 0 ? " - " + data.price + " UZS" : ""}
                          </h5>
                        </li>
                        <li>
                          <i className="icon-material-outline-access-time"></i>
                          <span>Date Posted</span>
                          <h5>2 days ago</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Bookmark or Share</h3>

                  <button className="bookmark-button margin-bottom-25">
                    <span className="bookmark-icon"></span>
                    <span className="bookmark-text">Bookmark</span>
                    <span className="bookmarked-text">Bookmarked</span>
                  </button>

                  <div className="copy-url">
                    <input
                      id="copy-url"
                      type="text"
                      value=""
                      className="with-border"
                    />
                    <button
                      className="copy-url-button ripple-effect"
                      data-clipboard-target="#copy-url"
                      title="Copy to Clipboard"
                      data-tippy-placement="top"
                    >
                      <i className="icon-material-outline-file-copy"></i>
                    </button>
                  </div>

                  <div className="share-buttons margin-top-25">
                    <div className="share-buttons-trigger">
                      <i className="icon-feather-share-2"></i>
                    </div>
                    <div className="share-buttons-content">
                      <span>
                        Interesting? <strong>Share It!</strong>
                      </span>
                      <ul className="share-buttons-icons">
                        <li>
                          <Link
                            to="#"
                            data-button-color="#3b5998"
                            title="Share on Facebook"
                            data-tippy-placement="top"
                          >
                            <i className="icon-brand-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-button-color="#1da1f2"
                            title="Share on Twitter"
                            data-tippy-placement="top"
                          >
                            <i className="icon-brand-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-button-color="#dd4b39"
                            title="Share on Google Plus"
                            data-tippy-placement="top"
                          >
                            <i className="icon-brand-google-plus-g"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            data-button-color="#0077b5"
                            title="Share on LinkedIn"
                            data-tippy-placement="top"
                          >
                            <i className="icon-brand-linkedin-in"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CenteredLayout>
    );
  }
};

export default withRouter(JobView);
