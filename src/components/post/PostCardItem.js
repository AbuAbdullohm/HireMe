import React from "react";
import { Link } from "react-router-dom";

const PostCardItem = (props) => {
  var link =
    props.type === 1 ? `/feed/` : props.type === 2 ? `/jobs/` : `/feed/`;

  return (
    <div className="listings-container margin-top-35">
      <Link to={link + props.id} className="job-listing">
        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            <img src={props.avatar} alt="" style={borderRadius100} />
          </div>

          {props.type === 1 || props.type === 2 ? (
            <div className="job-listing-description">
              <h4 className="job-listing-company">
                {props.name}{" "}
                <span
                  className="verified-badge"
                  data-tippy-placement="top"
                  data-tippy=""
                  data-original-title="Verified Employer"
                ></span>
              </h4>
              <h3 className="job-listing-title"> {props.title}</h3>
              <p className="job-listing-text">{props.description}</p>
            </div>
          ) : (
            <div className="job-listing-description">
              <h4 className="job-listing-company">
                {props.name}{" "}
                <span
                  className="verified-badge"
                  data-tippy-placement="top"
                  data-tippy=""
                  data-original-title="Verified Employer"
                ></span>
              </h4>
              <embed src={props.link} />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PostCardItem;

var borderRadius100 = {
  borderRadius: 100,
};
