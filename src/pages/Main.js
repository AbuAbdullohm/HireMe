import React, { useState, useEffect } from "react";
import "./Main.css";

import { Link } from "react-router-dom";
import axios from "axios";

import FullwidthLayout from "../layouts/FullwidthLayout";
import Footer from "../layouts/Footer";
import JobCardGridItem from "../components/job/JobCardGridItem";
import TaskCardListItem from "../components/task/TaskCardListItem";

const Main = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size] = useState(props.size);
  const [widgetName] = useState(props.widget_name);
  const [queryCondition] = useState(props.queryCondition);
  const [data, setData] = useState([]);

  //   fetch("https://vacancy.hire.uz/v1/vacancies?per-page=" + this.state.size + `&` + this.state.queryCondition);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
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
    return (
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>{widgetName}</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <section
          id="not-found"
          className="center margin-top-50 margin-bottom-25"
        >
          <h2>
            <i className="icon-feather-alert-circle"></i>
          </h2>
          <p>We're sorry, but our server is gone down</p>
        </section>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>{widgetName}</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <section
          id="not-found"
          className="center margin-top-50 margin-bottom-25"
        >
          <div>
            <i className="icon-line-awesome-cloud-download"></i>
          </div>
          <p>Now data is being loaded</p>
        </section>
      </div>
    );
  } else {
    return (
      <FullwidthLayout>
        <div
          className="intro-banner dark-overlay"
          data-background-image="images/home-background-02.jpg"
        >
          <div className="transparent-header-spacer"></div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-headline">
                  <h3>
                    <strong>
                      Hire experts freelancers for any job, any time.
                    </strong>
                    <br />
                    <span>
                      Huge community of designers, developers and creatives
                      ready for your project.
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="intro-banner-search-form margin-top-95">
                  {/* <div className="intro-search-field with-autocomplete">
                    <label
                      htmlFor="autocomplete-input"
                      className="field-title ripple-effect"
                    >
                      Where?
                    </label>
                    <div className="input-with-icon">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Online Job"
                      />
                      <i className="icon-material-outline-location-on"></i>
                    </div>
                  </div> */}

                  <div className="intro-search-field">
                    <label
                      htmlFor="intro-keywords"
                      className="field-title ripple-effect"
                    >
                      What you need done?
                    </label>
                    <input
                      id="intro-keywords"
                      type="text"
                      placeholder="e.g. build me a website"
                    />
                  </div>

                  <div className="intro-search-field">
                    <select
                      className="selectpicker default"
                      multiple
                      data-selected-text-format="count"
                      data-size="7"
                      title="All Categories"
                    >
                      <option>Admin Support</option>
                      <option>Customer Service</option>
                      <option>Data Analytics</option>
                      <option>Design & Creative</option>
                      <option>Legal</option>
                      <option>Software Developing</option>
                      <option>IT & Networking</option>
                      <option>Writing</option>
                      <option>Translation</option>
                      <option>Sales & Marketing</option>
                    </select>
                  </div>

                  <div className="intro-search-button">
                    <button className="button ripple-effect">Search</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <ul className="intro-stats margin-top-45 hide-under-992px">
                  <li>
                    <strong className="counter">1,586</strong>
                    <span>Jobs Posted</span>
                  </li>
                  <li>
                    <strong className="counter">1,232</strong>
                    <span>CV</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="background-image-container"
            style={{ backgroundImage: "url('images/home-background-02.jpg')" }}
          ></div>
        </div>

        <div className="section margin-top-65 margin-bottom-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-headline centered margin-top-0 margin-bottom-45">
                  <h3>Popular Categories</h3>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className={"photo-box small"}
                  data-background-image="images/job-category-01.jpg"
                  style={{
                    background: "url(/images/job-category-01.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Web / Software Dev</h3>
                    <span>612</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-02.jpg"
                  style={{
                    background: "url(/images/job-category-02.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Data Science / Analitycs</h3>
                    <span>113</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-03.jpg"
                  style={{
                    background: "url(/images/job-category-03.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Accounting / Consulting</h3>
                    <span>186</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-04.jpg"
                  style={{
                    background: "url(/images/job-category-04.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Writing & Translations</h3>
                    <span>298</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-05.jpg"
                  style={{
                    background: "url(/images/job-category-05.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Sales & Marketing</h3>
                    <span>549</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-06.jpg"
                  style={{
                    background: "url(/images/job-category-06.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Graphics & Design</h3>
                    <span>873</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-07.jpg"
                  style={{
                    background: "url(/images/job-category-07.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Digital Marketing</h3>
                    <span>125</span>
                  </div>
                </Link>
              </div>

              <div className="col-xl-3 col-md-6">
                <Link
                  to="/jobs"
                  className="photo-box small"
                  data-background-image="images/job-category-08.jpg"
                  style={{
                    background: "url(/images/job-category-08.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "100%",
                  }}
                >
                  <div className="photo-box-content">
                    <h3>Education & Training</h3>
                    <span>445</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-headline margin-top-0 margin-bottom-35">
                  <h3>Recent Jobs</h3>
                  <Link to="/jobs" className="headline-link">
                    Browse All Jobs
                  </Link>
                </div>

                <div className="tasks-list-container compact-list margin-top-35">
                  {data.map((item) => (
                    <TaskCardListItem
                      key={item.id}
                      id={item.id}
                      name={item.title}
                      salary_from={item.price}
                      salary_to={item.price}
                      area_id={item.category}
                      area_name={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section padding-top-65 padding-bottom-65">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-headline centered margin-top-0 margin-bottom-5">
                  <h3>How It Works?</h3>
                </div>
              </div>

              <div className="col-xl-4 col-md-4">
                <div className="icon-box with-line">
                  <div className="icon-box-circle">
                    <div className="icon-box-circle-inner">
                      <i className="icon-line-awesome-lock"></i>
                      <div className="icon-box-check">
                        <i className="icon-material-outline-check"></i>
                      </div>
                    </div>
                  </div>
                  <h3>Create an Account</h3>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination going forward.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-md-4">
                <div className="icon-box with-line">
                  <div className="icon-box-circle">
                    <div className="icon-box-circle-inner">
                      <i className="icon-line-awesome-legal"></i>
                      <div className="icon-box-check">
                        <i className="icon-material-outline-check"></i>
                      </div>
                    </div>
                  </div>
                  <h3>Post a Job</h3>
                  <p>
                    Efficiently unleash cross-media information without. Quickly
                    maximize return on investment.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-md-4">
                <div className="icon-box">
                  <div className="icon-box-circle">
                    <div className="icon-box-circle-inner">
                      <i className=" icon-line-awesome-trophy"></i>
                      <div className="icon-box-check">
                        <i className="icon-material-outline-check"></i>
                      </div>
                    </div>
                  </div>
                  <h3>Choose an Expert</h3>
                  <p>
                    Nanotechnology immersion along the information highway will
                    close the loop on focusing solely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section gray padding-top-65 padding-bottom-55">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-headline centered margin-top-0 margin-bottom-5">
                  <h3>Testimonials</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="fullwidth-carousel-container margin-top-20">
            <div className="testimonial-carousel testimonials">
              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial-avatar">
                    <img src="images/user-avatar-small-02.jpg" alt="" />
                  </div>
                  <div className="testimonial-author">
                    <h4>Sindy Forest</h4>
                    <span>Freelancer</span>
                  </div>
                  <div className="testimonial">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. Dramatically maintain clicks-and-mortar
                    solutions without functional solutions.
                  </div>
                </div>
              </div>

              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial-avatar">
                    <img src="images/user-avatar-small-01.jpg" alt="" />
                  </div>
                  <div className="testimonial-author">
                    <h4>Tom Smith</h4>
                    <span>Freelancer</span>
                  </div>
                  <div className="testimonial">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. Dynamically innovate
                    resource-leveling customer service for state of the art.
                  </div>
                </div>
              </div>

              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial-avatar">
                    <img src="images/user-avatar-placeholder.png" alt="" />
                  </div>
                  <div className="testimonial-author">
                    <h4>Sebastiano Piccio</h4>
                    <span>Employer</span>
                  </div>
                  <div className="testimonial">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. Dynamically innovate
                    resource-leveling customer service for state of the art.
                  </div>
                </div>
              </div>

              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial-avatar">
                    <img src="images/user-avatar-small-03.jpg" alt="" />
                  </div>
                  <div className="testimonial-author">
                    <h4>David Peterson</h4>
                    <span>Freelancer</span>
                  </div>
                  <div className="testimonial">
                    Collaboratively administrate turnkey channels whereas
                    virtual e-tailers. Objectively seize scalable metrics
                    whereas proactive e-services. Seamlessly empower fully
                    researched growth strategies and interoperable sources.
                  </div>
                </div>
              </div>

              <div className="fw-carousel-review">
                <div className="testimonial-box">
                  <div className="testimonial-avatar">
                    <img src="images/user-avatar-placeholder.png" alt="" />
                  </div>
                  <div className="testimonial-author">
                    <h4>Marcin Kowalski</h4>
                    <span>Freelancer</span>
                  </div>
                  <div className="testimonial">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. Dramatically maintain clicks-and-mortar
                    solutions without functional solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section padding-top-70 padding-bottom-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="counters-container">
                  <div className="single-counter">
                    <i className="icon-line-awesome-suitcase"></i>
                    <div className="counter-inner">
                      <h3>
                        <span className="counter">1,586</span>
                      </h3>
                      <span className="counter-title">Jobs Posted</span>
                    </div>
                  </div>

                  <div className="single-counter">
                    <i className="icon-line-awesome-user"></i>
                    <div className="counter-inner">
                      <h3>
                        <span className="counter">2,413</span>
                      </h3>
                      <span className="counter-title">Active Members</span>
                    </div>
                  </div>

                  <div className="single-counter">
                    <i className="icon-line-awesome-trophy"></i>
                    <div className="counter-inner">
                      <h3>
                        <span className="counter">99</span>%
                      </h3>
                      <span className="counter-title">Satisfaction Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </FullwidthLayout>
    );
  }
};

export default Main;
