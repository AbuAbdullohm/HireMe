import React, { useState, useEffect } from "react";
import FullwidthLayout from "./../layouts/FullwidthLayout";
import JobCardGridItem from "./../components/job/JobCardGridItem";
import JobSmallCardItem from "./../components/job/JobSmallCardItem";
import Pagination from "./../components/ui/pagination/Pagination";
import JobSearchSidebar from "../components/ui/jobSearchSidebar/JobSearchSidebar";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

export default function Jobs(props) {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [data, setData] = useState([]);

  //   fetch("https://vacancy.hire.uz/v1/vacancies?per-page=12" + (specs != undefined ? "&specializations=" + specs : "") + "&page=" + page)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
    // const values = queryString.parse(props.location.search);
    // var specs = values.specializations;
    // var page = values.page;
    // fetch(`https://vacancy.hire.uz/v1/vacancies?per-page=12${specs ? "&specializations=" + specs : ""}&page=${page}`)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setData(result.data);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  // });

  if (error) {
    return (
      <FullwidthLayout>
        <div className="full-page-container">
          <JobSearchSidebar />

          <div className="full-page-content-container" data-simplebar>
            <div className="full-page-content-inner">
              <h3 className="page-title">Search Results</h3>

              <div className="notify-box margin-top-15">
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch-button"></span>
                    <span className="switch-text">
                      Turn on email alerts for this search
                    </span>
                  </label>
                </div>

                <div className="sort-by">
                  <span>Sort by:</span>
                  <select className="selectpicker hide-tick">
                    <option>Relevance</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Random</option>
                  </select>
                </div>
              </div>

              <div className="widget widget-jobs">
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

              <div className="clearfix"></div>

              <Pagination
                currentPage={1}
                size={4}
                totalPages={10}
                location_query={props.location.search}
              />

              <div className="clearfix"></div>

              <div className="small-footer margin-top-15">
                <div className="small-footer-copyrights">
                  © 2024{" "}
                  <a href={"https://rteco.uz"}>
                    <strong>rteco</strong>
                  </a>
                  . All Rights Reserved.
                </div>
                <ul className="footer-social-links">
                  <li>
                    <Link to="#" title="Facebook" data-tippy-placement="top">
                      <i className="icon-brand-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Twitter" data-tippy-placement="top">
                      <i className="icon-brand-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Google Plus" data-tippy-placement="top">
                      <i className="icon-brand-google-plus-g"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="LinkedIn" data-tippy-placement="top">
                      <i className="icon-brand-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </FullwidthLayout>
    );
  } else if (!isLoaded) {
    return (
      <FullwidthLayout>
        <div className="full-page-container">
          <JobSearchSidebar />

          <div className="full-page-content-container" data-simplebar>
            <div className="full-page-content-inner">
              <h3 className="page-title">Search Results</h3>

              <div className="notify-box margin-top-15">
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch-button"></span>
                    <span className="switch-text">
                      Turn on email alerts for this search
                    </span>
                  </label>
                </div>

                <div className="sort-by">
                  <span>Sort by:</span>
                  <select className="selectpicker hide-tick">
                    <option>Relevance</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Random</option>
                  </select>
                </div>
              </div>

              <div className="widget widget-jobs">
                <div className="sd-title">
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

              <div className="clearfix"></div>

              <div className="small-footer margin-top-15">
                <div className="small-footer-copyrights">
                  © 2024{" "}
                  <a href={"https://rteco.uz"}>
                    <strong>rteco</strong>
                  </a>
                  . All Rights Reserved.
                </div>
                <ul className="footer-social-links">
                  <li>
                    <Link to="#" title="Facebook" data-tippy-placement="top">
                      <i className="icon-brand-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Twitter" data-tippy-placement="top">
                      <i className="icon-brand-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Google Plus" data-tippy-placement="top">
                      <i className="icon-brand-google-plus-g"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="LinkedIn" data-tippy-placement="top">
                      <i className="icon-brand-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </FullwidthLayout>
    );
  } else {
    return (
      <FullwidthLayout>
        <div className="full-page-container">
          <JobSearchSidebar />

          <div className="full-page-content-container" data-simplebar>
            <div className="full-page-content-inner">
              <h3 className="page-title">Search Results</h3>

              <div className="notify-box margin-top-15">
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="switch-button"></span>
                    <span className="switch-text">
                      Turn on email alerts for this search
                    </span>
                  </label>
                </div>

                <div className="sort-by">
                  <span>Sort by:</span>
                  <select className="selectpicker hide-tick">
                    <option>Relevance</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Random</option>
                  </select>
                </div>
              </div>

              <div className="listings-container grid-layout margin-top-35">
                {data.map((item) => (
                  <JobCardGridItem
                    key={item.id}
                    id={item.id}
                    name={item.title}
                    url={item.image}
                    salary_from={item.price}
                    salary_to={item.price}
                    // area_name={item.area.name}
                    // employer_name={item.employer.name}
                    // employer_logo={
                    //   item.employer.logo_urls.original !== ""
                    //     ? item.employer.logo_urls.original
                    //     : "/images/company-logo-placeholder.png"
                    // }
                    // type={item.schedule.name}
                  />
                ))}
              </div>

              <div className="clearfix"></div>

              <Pagination
                currentPage={1}
                size={4}
                totalPages={10}
                location_query={props.location.search}
              />

              <div className="clearfix"></div>

              <div className="small-footer margin-top-15">
                <div className="small-footer-copyrights">
                  © 2024{" "}
                  <a href={"https://rteco.uz"}>
                    <strong>rteco</strong>
                  </a>
                  . All Rights Reserved.
                </div>
                <ul className="footer-social-links">
                  <li>
                    <Link
                      to="http://facebook.com/rteco.llc"
                      title="Facebook"
                      data-tippy-placement="top"
                    >
                      <i className="icon-brand-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Twitter" data-tippy-placement="top">
                      <i className="icon-brand-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="Google Plus" data-tippy-placement="top">
                      <i className="icon-brand-google-plus-g"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" title="LinkedIn" data-tippy-placement="top">
                      <i className="icon-brand-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </FullwidthLayout>
    );
  }
}
