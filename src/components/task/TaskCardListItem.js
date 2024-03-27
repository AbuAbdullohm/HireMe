import React from "react";
import { Link } from "react-router-dom";

const TaskCardListItem = (props) => {
  return (
    <Link to={`/jobs/${props.id}`} className="task-listing">
      <div className="task-listing-details">
        <div className="task-listing-description">
          <h3 className="task-listing-title">{props.name}</h3>
          <ul className="task-icons">
            <li>
              <i className="icon-material-outline-location-on"></i>
              {props.area_name}
            </li>
            <li>
              <i className="icon-material-outline-access-time"></i> 2 minutes
              ago
            </li>
          </ul>
          {/*<div className="task-tags margin-top-15">*/}
          {/*<span>iOS</span>*/}
          {/*<span>Android</span>*/}
          {/*<span>mobile apps</span>*/}
          {/*<span>design</span>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="task-listing-bid">
        <div className="task-listing-bid-inner">
          <div className="task-offers">
            <strong>
              {props.salary_from != 0 ? props.salary_from : ""}
              {props.salary_to != 0 ? " - " + props.salary_to : ""}
            </strong>
            <span>Fixed Price</span>
          </div>
          <span className="button button-sliding-icon ripple-effect">
            Details <i className="icon-material-outline-arrow-right-alt"></i>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TaskCardListItem;
