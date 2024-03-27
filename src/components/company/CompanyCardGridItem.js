import React from "react";
import { Link } from "react-router-dom";

const CompanyCardGridItem = (props) => {
  return (
    <Link to={`/companies/${props.id}`} className="company">
      <div className="company-inner-alignment">
        <span className="company-logo">
          {props.logo !== "" ? (
            <img src={props.logo} alt="" />
          ) : (
            <img src={"images/company-logo-placeholder.png"} alt="" />
          )}
        </span>
        <h4>{props.name}</h4>
        <div className="star-rating" data-rating="3.5"></div>
      </div>
    </Link>
  );
};

export default CompanyCardGridItem;
