import React from "react";
import { Link } from "react-router-dom";

const JobSmallCardItem = (props) => {
  return (
    <div className="job-info">
      <Link to={`/jobs/${props.id}`}>
        <div className="job-small-card_item">
          <div className="job-details">
            <h4>{props.name}</h4>
            <div>{props.employer_name}</div>
          </div>
          <div className="hr-rate">
            <span>
              ${props.salary_from} - ${props.salary_to}/hr
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobSmallCardItem;
