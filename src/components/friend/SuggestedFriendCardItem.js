import React from "react";

const SuggestedFriendCardItem = (props) => {
  return (
    <div className="suggestion-usd job-small-card_item">
      <div className="row">
        <div className="col-4">
          <img className="fullRounded" src={props.picture} alt={props.name} />
        </div>
        <div className="col-8 padding0">
          <div className="sgt-text">
            <h4>{props.name}</h4>
            <span>{props.jobTitle}</span>
          </div>
          <span>
            <i className="glyphicon glyphicon-plus"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedFriendCardItem;
