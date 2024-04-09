import React from "react";
import { Link } from "react-router-dom";

const JobCardGridItem = (props) => {
  return (
    <Link to={`/jobs/${props.id}`} className="job-listing">
      <div className="job-listing-details">
        <div className="job-listing-company-logo">
          <img src={props.url} alt={props.name} />
        </div>

        <div className="job-listing-description">
          <h4 className="job-listing-company">{props.employer_name}</h4>
          <h3 className="job-listing-title">{props.name}</h3>
        </div>
      </div>

      <div className="job-listing-footer">
        <span className="bookmark-icon"></span>
        <ul>
          <li>
            <i className="icon-material-outline-location-on"></i>{" "}
            {props.area_name}
          </li>
          <li>
            <i className="icon-material-outline-business-center"></i>{" "}
            {props.type}
          </li>
          <br />
          <li>
            <i className="icon-material-outline-account-balance-wallet"></i>{" "}
            {props.salary_from !== 0 ? props.salary_from + " UZS" : ""}
            {props.salary_to !== 0 ? " - " + props.salary_to + " UZS" : ""}
            {props.salary_from + props.salary_to === 0 ? "Сontractual" : ""}
          </li>
          <li>
            <i className="icon-material-outline-access-time"></i> 2 days ago
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default JobCardGridItem;
