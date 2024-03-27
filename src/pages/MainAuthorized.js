import React, { useState, useEffect } from "react";
import "./Main.css";
import PostCardItem from "./../components/post/PostCardItem";

import CenteredLayout from "./../layouts/CenteredLayout";

import TopJobs from "./../components/widgets/rightJobsWidget/RightJobsWidget";

import SuggestedFriendsLeftWidget from "./../components/widgets/suggestedFriendsLeftWidget/SuggestedFriendsLeftWidget";
import { Link } from "react-router-dom";

const MainAuthorized = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size] = useState(props.size);
  const [widgetName] = useState(props.widget_name);
  const [queryCondition] = useState(props.queryCondition);
  const [data, setData] = useState([]);

  //   fetch("https://vacancy.hire.uz/v1/vacancies?per-page=" + this.state.size + `&` + this.state.queryCondition );

  useEffect(() => {
    fetch(
      `https://vacancy.hire.uz/v1/vacancies?per-page=${props.size}&${props.queryCondition}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });

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
      <CenteredLayout>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
              <div className="main-left-sidebar no-margin">
                {window.innerWidth > 600 ? (
                  <SuggestedFriendsLeftWidget size={10} />
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-8 no-pd">
              <div className="main-ws-sec">
                <div className="posts-section">
                  {data.map((item) => (
                    <PostCardItem
                      id={item.id}
                      name={item.name}
                      avatar={"./images/user-avatar-small-02.jpg"}
                      type={2} // type post
                      title={item.name}
                      description={""}
                    />
                  ))}

                  <div className="process-comm">
                    <Link to="#" title="">
                      <img src="images/process-icon.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 pd-right-none no-pd">
              <div className="right-sidebar">
                <TopJobs
                  widget_name={"Top Jobs"}
                  queryCondition={"top=1"}
                  size={5}
                />

                <TopJobs
                  widget_name={"Week's Top"}
                  queryCondition={"most_viewed=1"}
                  size={7}
                />
              </div>
            </div>
          </div>
        </div>
      </CenteredLayout>
    );
  }
};

export default MainAuthorized;
