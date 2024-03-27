import React, { useState, useEffect } from "react";
import SuggestedFriendCardItem from "../../friend/SuggestedFriendCardItem";
import { Link } from "react-router-dom";

const SuggestedFriendsLeftWidget = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size] = useState(props.size);
  const [widgetName] = useState(props.widget_name);
  const [queryCondition] = useState(props.queryCondition);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9003/v1/friends?per-page=${size}&${queryCondition}`)
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
  }, [size, queryCondition]);

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
      <div className="widget suggestions full-width">
        <div className="sd-title">
          <h3>Suggestions</h3>
          <i className="la la-ellipsis-v"></i>
        </div>

        <div className="suggestions-list">
          {data.map((item) => (
            <SuggestedFriendCardItem
              name={"James William"}
              jobTitle={"Landshaft designer"}
              picture={"./images/user-avatar-small-01.jpg"}
            />
          ))}

          <div className="view-more">
            <Link to="#" title="">
              View More
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default SuggestedFriendsLeftWidget;
